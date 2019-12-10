import thunk from 'redux-thunk';
import { expect } from 'chai';
import {changePage}  from '../actions'
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

describe('imports', () => {
    it('should import redux thunk', done => {
      expect(thunk).to.not.be.undefined;
      done()
    })
    it('should import changePage', done => {
      expect(changePage).to.not.be.undefined;
      expect(changePage).to.be.a.func;
      done()
    })
    it('should import createStore', done => {
      expect(createStore).to.not.be.undefined;
      done()
    })
    it('should import combineReducers', done => {
      expect(combineReducers).to.not.be.undefined;
      done()
    })
    it('should import applyMiddleware', done => {
      expect(applyMiddleware).to.not.be.undefined;
      done()
    })
  })