import { fetchCustomers } from './helpers'
import { addCustomer, changePage } from './actions';
import { store } from './store';
import  mongoose  from 'mongoose';
import models from './models'
import { initializeDatabase } from './config';
require('dotenv').load()



function start() {
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

function removeDocuments(collection) {
    return mongoose.model(collection).remove()
}

initializeDatabase()
.then(removeDocuments.bind(this, 'customers'))
.then(() => start())
