import mongoose from 'mongoose';
global.Promise = require('bluebird');

//hopefully this key doesnt expire
export const headers = {
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
    'DNT': '1',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMSwiZXhwIjoxNTc4MjQzMTE0fQ.jnHATThcZFsNgL-Q8UQA8MGLoA1NrX2CS1xtziqgw4E',
    'Accept': '*/*',
    'Referer': 'http://garages.philapark.org/customers',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cookie': 'rails_session=%7B%22auth_token%22%3A%22eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMSwiZXhwIjoxNTc4MjQzMTE0fQ.jnHATThcZFsNgL-Q8UQA8MGLoA1NrX2CS1xtziqgw4E%22%2C%22user%22%3A%7B%22id%22%3A11%2C%22username%22%3A%22jkolman%22%7D%7D'
};

export const initializeDatabase = (dbUrl) => {
    mongoose.connection.on('connected', () => {
      console.log('Connected to DB')
    });
    mongoose.connection.on('disconnected', () => {
      console.log('Disconnected');
    });
    mongoose.connection.on('error', err => console.log(err));
    return mongoose.connect(dbUrl);
};
