import { expect } from 'chai';
import mongoose from 'mongoose';
import models from './models';
import { fetchCustomers } from './helpers';
require('dotenv').load();

const modelNames = ['customers'];

describe('database', () => {
	before(done => {
		mongoose.connect(process.env.DATABASE_URL)
		.then(() => {
			let promises = Promise.map(modelNames, model => {
				return mongoose.model(model).remove() 
			})
			return Promise.all(promises).then(() => done()) 
		})
	})

	it('database should be empty', done => {
		Promise.all(Promise.map(modelNames, model => {
			return mongoose.model(model).find({}).count().then(count => {
				expect(count).to.eq(0)
				done()
			})
		}))
	})
})

describe('fetch customers', () => {
  it('should fetch some customers', done => {
    fetchCustomers(1, 100)
    .then(customers => {
      expect(customers.length).to.equal(100)
      done()
    })
  })
})

