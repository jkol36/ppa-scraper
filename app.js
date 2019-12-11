import { fetchCustomers } from './helpers'
import { addCustomer, changePage } from './actions';
import { store } from './store';
import  mongoose  from 'mongoose';
import models from './models'
import { initializeDatabase } from './config';
import moment from 'moment'
import fs from 'fs';
import {parse} from 'json2csv';

import path from 'path';
require('dotenv').load()
const json2csv = require('json2csv').parse



function start(Customers) {
    console.log('start called', store.getState().page)
    const { page, customers } = store.getState();
    console.log('customer length', customers.length)
    if(customers.length === 1369) {
        console.log(true)
        return saveCustomersInMongo().then(() => {
            return mongoose.model('customers').countDocuments().then(console.log('saved mongo', count))
        })
    }
    const { dispatch } = store;
    fetchCustomers(page, 10)
    .map(customer => dispatch(addCustomer(customer)))
    .then(() => dispatch(changePage(page+1)))
    .then(() => start())
}

function saveCustomersInMongo() {
    console.log('saving customers', store.getState().customers.length)
    let saved = 0
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
                    })
                }
            })
        })
    })
    console.log('saving', store.getState().customers.length)
}

function startLocations() {
    const {getState, dispatch} = store;
    const {page, locations} =  getState();
    
}

function removeDocuments(collection) {
    return mongoose.model(collection).remove()
}

const writeResultsToCsv = (results) => {
    return new Promise(resolve => {
      let csv = json2csv(results)
      fs.writeFile('results.csv', csv, (err) => {
        if(!err) {
          resolve(results)
        }
      })
    })
  }
/* initializeDatabase()
.then(() => mongoose.model('customers').find())
.then(customers => customers.map(customer => customer._doc))
.then(customers => customers.map(costumer => costumer))
.then(customersAsJson => writeResultsToCsv(customersAsJson))
.then(console.log) */
/* initializeDatabase()
.then(removeDocuments.bind(this, 'customers'))
.then(() => start()) */

const prices = [794.37,1030.86,657.72,846.93,904.12,688.08,811.99,1030.66,846.93,1096,1052.46,1026.66,1813.65,656.85,380.73,1011.58,667.52,809.96,662.99,809.53,978.31,1322.37,1113.60,688.22,601.76,729.11,658.15,901.06,682.21, 1243.45,1513.26,1103.51,749.24,1204.70,931.42]
console.log(prices.reduce((a, b) => a+b))