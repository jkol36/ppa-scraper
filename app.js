import { 
    fetchCustomers, 
    getLocations, 
    fetchBadges 
} from './helpers'
import { 
    addCustomer, 
    changePage, 
    addLocation,
    addBadge
 } from './actions';
import { store } from './store';
import  mongoose  from 'mongoose';
import models from './models'
import { initializeDatabase } from './config';
import moment from 'moment'
import fs from 'fs';
import {parse} from 'json2csv';
import path from 'path';
import { start } from 'repl';
require('dotenv').load();
const json2csv = require('json2csv').parse;



function startCustomerScrape() {
    console.log('startCustomerScrape called', store.getState().page);
    const { page, customers } = store.getState();
    console.log('customer length', customers.length);
    if(customers.length === 1369) {
        console.log(true)
        return saveCustomersInMongo().then(() => {
            return mongoose.model('customers').countDocuments().then(console.log('saved mongo', count));
        });
    };
    const { dispatch } = store;
    fetchCustomers(page, 10)
    .map(customer => dispatch(addCustomer(customer)))
    .then(() => dispatch(changePage(page+1)))
    .then(() => startCustomerScrape());
}

function saveCustomersInMongo() {
    console.log('saving customers', store.getState().customers.length);
    return new Promise(resolve => {
        return Promise.map(store.getState().customers, customer => {
            return mongoose
            .model('customers')
            .create(customer)
            .then(createdCustomer => createdCustomer.save())
            .then(() => {
                saved+=1
                console.log('saved', saved)
                if(saved === 1369) {
                    mongoose.model('customers').countDocuments().then(res => {
                        console.log(res, 'exiting')
                        process.exit()
                    });
                };
            });
        });
    });
}

function startLocationScrape() {
    const {getState, dispatch} = store;
    const {page, locations} =  getState();
    return getLocations()
    .map(location => dispatch(addLocation(location)))
    .then(() => process.exit())
    
}

function startBadgeScrape () {
    const {getState, dispatch} = store;
    const {page, badges} = getState();
    console.log(badges.length);
    fetchBadges(page, 100)
    .map(badge => dispatch(addBadge(badge)))
    .then(() => mongoose.model('badges').countDocuments())
    .then(console.log)
    .then(() => dispatch(changePage(getState().page+1)))
    .then(page => startBadgeScrape(page))
    .catch(console.log)
}

function removeDocuments(collection) {
    return mongoose.model(collection).remove();
}

const writeResultsToCsv = (results, filename) => {
    return new Promise(resolve => {
      let csv = json2csv(results)
      fs.writeFile(`${filename}.csv`, csv, (err) => {
        if(!err) {
          resolve(results)
        };
      });
    })
  }
  initializeDatabase(process.env.DATABASE_URL)
  .then(() => mongoose.model('badges').find())
  .then(results => results.map(result => result._doc))
  .then(results => results.map(result => result))
  .then(resultsAsJson => writeResultsToCsv(resultsAsJson, 'badges'))
  /* initializeDatabase(process.env.DATABASE_URL)
  .then(startBadgeScrape)
  .catch(console.log) */
 /*  initializeDatabase(process.env.DATABASE_URL)
  .then(() => mongoose.model('locations').countDocuments())
  .then(console.log)
  .catch(console.log); */
/* initializeDatabase(process.env.DATABASE_URL)
.then(() => mongoose.model('locations').find())
.then(locations => locations.map(location => location._doc))
.then(locations => locations.map(location => location))
.then(locationsAsJson => writeResultsToCsv(locationsAsJson, 'locations'))
.then(console.log) */
/* initializeDatabase()
.then(removeDocuments.bind(this, 'customers'))
.then(() => startCustomerScrape()) */

