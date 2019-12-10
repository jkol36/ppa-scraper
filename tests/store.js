import { store } from '../store';
import { expect } from 'chai';
import {changePage} from '../actions';



describe('store', () => {
    it('should have an initial state', done => {
      let state = store.getState();
      console.log(state);
      expect(state).to.not.be.undefined;
      expect(state).to.be.an.object;
      done()
    })
    it('should change page', done => {
      const { dispatch } = store;
      expect(dispatch).to.not.be.undefined;
      let { page } = store.getState()
      expect(page).to.not.be.undefined;
      expect(page).to.eq(1);
      page = dispatch(changePage(2))
      expect(page).to.eq(2)
      done()
    })
})