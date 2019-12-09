import thunk from 'redux-thunk';
import { expect } from 'chai';

describe('imports', () => {
    it('should import redux thunk', done => {
      expect(thunk).to.not.be.undefined;
      done()
    })
  })