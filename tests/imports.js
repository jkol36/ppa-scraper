import thunk from 'redux-thunk';

describe('imports', () => {
    it('should import redux thunk', done => {
      expect(thunk).to.not.be.undefined;
      done()
    })
  })