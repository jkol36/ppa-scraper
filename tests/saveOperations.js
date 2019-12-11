import { expect } from 'chai';
import { initializeDatabase } from '../config';
import customer from '../data/customer.json';
import location from '../data/location.json';
import mongoose  from 'mongoose';
import models from '../models'; // required for models to be registered in mongo
require('dotenv').load()


describe("saveOperations", () => {
  before(done => {
    initializeDatabase(process.env.TEST_DATABASE_URL)
    .then(() => done())
  });
  after(done => {
    mongoose.disconnect().then(() => done())
  })
  it("should save a customer in mongodb", done => {
    mongoose
      .model("customers")
      .create(customer)
      .then(customer => customer.save())
      .then(customer => {
        expect(customer).to.be.an.object;
        done()
      })
    });
    it('should save location in mongo', done => {
      mongoose
      .model('locations')
      .create(location)
      .then(location => location.save())
      .then(location => {
        expect(location).to.not.be.undefined;
        expect(location).to.be.an.object;
        done()
      })
    })
  });
    