import { store } from '../store';
import { expect } from 'chai';
import {changePage, addCustomer} from '../actions';
import customer from '../data/customer.json'



describe('store', () => {
    it('should have an initial state', done => {
      let state = store.getState();
      console.log(state);
      expect(state).to.not.be.undefined;
      expect(state).to.be.an.object;
      done();
    })
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
    })
    it('should add a customer', done => {
      const { dispatch } = store
      let {customers} = store.getState();
      expect(customers).to.not.be.undefined;
      expect(customers).to.be.an.array
      dispatch(addCustomer(customer)).then(() => {
        customers = store.getState().customers
        expect(customers.length).to.eq(1)
        console.log(customers)
        done()
      })
    })
})