import { store } from '../store';
import { expect } from 'chai';
import {
  changePage, 
  addCustomer, 
  addLocation,
  addBadge 
} from '../actions';
import customer from '../data/customer.json';
import badge from '../data/badge.json';
import { initializeDatabase } from '../config';
import mongoose from 'mongoose';



describe('store', () => {
    before(done => {
      initializeDatabase(process.env.TEST_DATABASE_URL)
      .then(() => done())
    });

    after(done => {
      mongoose.disconnect().then(() => done());
    });

    it('should have an initial state', done => {
      let state = store.getState();
      expect(state).to.not.be.undefined;
      expect(state).to.be.an.object;
      done();
    });
    it('should change page', done => {
      const { dispatch } = store;
      expect(dispatch).to.not.be.undefined;
      let { page } = store.getState()
      expect(page).to.not.be.undefined;
      expect(page).to.eq(1);
      dispatch(changePage(2)).then(res => {
        let {page} = store.getState();
        expect(page).to.eq(2);
        done();
      })
    });
    it('should add a customer', done => {
      const { dispatch } = store
      let {customers} = store.getState();
      expect(customers).to.not.be.undefined;
      expect(customers).to.be.an.array
      dispatch(addCustomer(customer)).then(() => {
        customers = store.getState().customers
        expect(customers.length).to.eq(1)
        done()
      })
    });
    it('should add a location', done => {
      const { dispatch, getState } = store;
      const {locations} = getState();
      expect(locations).to.be.an.array;
      let location = {
        id:1,
        created_at: '08/18/2017',
        updated_at: '08/18/2017',
        name: 'Family Courthouse Garage',
        address: '1503-11 Arch Street',
        location: 'Family Court ',
        comment: null,
        url: 'http://garages.philapark.org/locations/1.json'
      }
      dispatch(addLocation(location))
      .then(() => {
        expect(getState().locations.length).to.eq(1);
        done()
      })

    });
    it('should add a badge', done => {
      const {dispatch, getState} = store;
      dispatch(addBadge(badge))
      .then(res => {
        expect(getState().badges.length).to.eq(1)
        done()
      })
    })
})