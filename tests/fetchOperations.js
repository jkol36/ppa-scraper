import { 
  fetchCustomers, 
  getBadges, 
  getLocations, 
  getReports,
  getTransactionBadges,
  getNamesDropdown,
  getBatchReciepts,
  getBatchIds
 } from '../helpers';
 import { expect } from 'chai';



describe('fetch operations', () => {
    it('should fetch some customers', done => {
      fetchCustomers(1, 100)
      .then(customers => {
        console.log('got customers', customers.length)
        console.log(customers[0])
        expect(customers.length).to.be.gt(0)
        done()
      })
    })
    it('should fetch locations', done => {
      getLocations()
      .then(res => {
        expect(res.body).to.be.an.array;
        console.log('location', res.body[0]);
        expect(res.body[0].name).to.not.be.null;
        done()
      })
    })
    it('should get badges', done => {
      getBadges(1, 10)
      .then(res => {
        console.log(res.body.data[0]);
        expect(res.body.data).to.be.an.array;
        expect(res.body.data.length).to.be.gt(0);
        expect(res.body.data[0].badge_number).to.not.be.null;
        done()
      })
    })
    it('should get reports', done => {
      getReports(1, 10)
      .then(res => {
        console.log('reports', res.body.data[0])
        expect(res.body.totalCount).to.be.gt(0)
        done()
      })
    })
    it('should get transaction badges', done => {
      getTransactionBadges(1, 10)
      .then(res => {
        console.log('transaction badges', res.data[0])
        expect(res.totalCount).to.be.gt(0);
        expect(res.data[0].id).to.not.be.undefined;
        done()
      })
      .catch(done)
    })
    it('should get names dropdown', done => {
      getNamesDropdown()
      .then(res => {
        expect(res).to.be.an.array
        done()
      })
      .catch(done)
    })
    it('should get batch reciepts', done => {
      getBatchReciepts()
      .then(res => {
        console.log('batch reviepts', res.body);
        expect(res.body).to.not.be.undefined;
        expect(res.body).to.be.an.array;
        done()
      })
      .catch(done)
    })
  })