import agent from 'superagent-bluebird-promise';
import { headers } from './config';
import { buildCustomerUrl } from './utils';


//make sure all ids are unique
export const fetchCustomers = (page, count) => {
    return agent
    .get(buildCustomerUrl(page, count))
    .set(headers)
    .then(res => res.body.data)
}

export const saveCustomers = data => {
    console.log('should save', data.length)
}