import { fetchCustomers } from './helpers'
import { 
    addCustomer, 
    changePage, 
    addLocation } from './actions';
import { store } from './store';
import  mongoose  from 'mongoose';
import models from './models'
import { initializeDatabase } from './config';
import moment from 'moment'
import fs from 'fs';
import {parse} from 'json2csv';
import path from 'path';
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
    console.log(page, locations);
    
}

function removeDocuments(collection) {
    return mongoose.model(collection).remove();
}

const writeResultsToCsv = (results) => {
    return new Promise(resolve => {
      let csv = json2csv(results)
      fs.writeFile('results.csv', csv, (err) => {
        if(!err) {
          resolve(results)
        };
      });
    })
  }
  startLocationScrape()
/* initializeDatabase()
.then(() => mongoose.model('customers').find())
.then(customers => customers.map(customer => customer._doc))
.then(customers => customers.map(costumer => costumer))
.then(customersAsJson => writeResultsToCsv(customersAsJson))
.then(console.log) */
/* initializeDatabase()
.then(removeDocuments.bind(this, 'customers'))
.then(() => startCustomerScrape()) */

