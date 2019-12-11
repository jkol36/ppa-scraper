import thunk from 'redux-thunk';
import { expect } from 'chai';
import {changePage}  from '../actions'
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import customer from '../data/customer.json';
import location from '../data/location.json';
import report from '../data/report.json';
import badge from '../data/badge.json';
import batchReciept from '../data/batchReciept';
import transactionBadge from '../data/transactionBadge';

describe('imports', () => {
    it('should import redux thunk', done => {
      expect(thunk).to.not.be.undefined
      expect(thunk).to.be.a.func;
      done()
    })
    it('should import a transaction badge', done => {
      expect(transactionBadge).to.not.be.undefined;
      expect(transactionBadge).to.be.an.object;
      done();
    })
    it('should import a customer', done => {
      expect(customer).to.not.be.undefined;
      expect(customer).to.be.an.object;
      done()
    })
    it('should import a report', done => {
      expect(report).to.not.be.undefined;
      expect(report).to.be.an.object;
      done()
    })
    it('should import a location', done => {
      expect(location).to.not.be.undefined;
      expect(location).to.be.an.object;
      done()
    })
    it('should import changePage', done => {
      expect(changePage).to.not.be.undefined;
      expect(changePage).to.be.a.func;
      done()
    })
    it('should import createStore', done => {
      expect(createStore).to.not.be.undefined;
      expect(createStore).to.be.a.func;
      done()
    })
    it('should import combineReducers', done => {
      expect(combineReducers).to.not.be.undefined;
      expect(combineReducers).to.be.a.func;
      done()
    })
    it('should import applyMiddleware', done => {
      expect(applyMiddleware).to.not.be.undefined;
      expect(applyMiddleware).to.be.a.func;
      done()
    })
    it('should import a badge', done => {
      expect(badge).to.not.be.undefined;
      expect(badge).to.be.an.object;
      done();
    });
    it('should import a batch receipt', done => {
      expect(batchReciept).to.not.be.undefined;
      expect(batchReciept).to.be.an.object;
      done()

    })
  })