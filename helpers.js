import agent from 'superagent-bluebird-promise';
import { headers } from './config';
import { buildCustomerUrl } from './utils';


//make sure all ids are unique
export function fetchCustomers(page, count) {
    return agent
    .get(buildCustomerUrl(page, count))
    .set(headers)
    .then(res => res.body.data)
    .catch(err => err)
}

export function getLocations() {
    return agent
    .get('http://garages.philapark.org/locations/show/all_min.json')
    .set(headers)
    .then(res => res)
    .catch(err => err)
}


export function getBadges(page, count) {
    return agent
    .get(`http://garages.philapark.org/badges.json?page=${page}&perPage=${count}`)
    .set(headers)
    .then(res => res)
    .catch(err => err)
}

export function getReports(page, count){
    return agent
    .get(`http://garages.philapark.org/reports.json?page=${page}&perPage=${count}`)
    .set(headers)
    .then(res => res)
    .catch(err => err)
}


export function getTransactionBadges(page, count) {
    return agent
    .get(`http://garages.philapark.org/transaction_batches.json?page=${page}&perPage=${count}&filter%5Blocation_names%5D=&filter%5Bbatch_type_names%5D=&`)
    .set(headers)
    .then(res => res.body)
    .catch(err => err)
}

export function getNamesDropdown() {
    return agent
    .get(`http://garages.philapark.org/transaction_batches/location_names/names_dropdown.json`)
    .set(headers)
    .then(res => res)
    .catch(err => err)
}

export function getBatchReciepts() {
    return agent
    .get(`http://garages.philapark.org/reports/batch_reciepts.json`)
    .set(headers)
    .then(res => res)
    .catch(err => err)
}
