import mongoose from "mongoose";
import * as C from '../constants';

export const changePage = (toPage) => dispatch => {
  return new Promise(resolve => {
    resolve(dispatch({
        type: C.CHANGE_PAGE,
        page: toPage
    }));
  });

};

export const addCustomer = customer => dispatch => {
  return new Promise(resolve => {
    resolve(dispatch({
      type: C.CUSTOMER_ADDED,
      customer
    }));
  });
};

export const addLocation = location => dispatch => {
  return mongoose
    .model('locations')
    .create(location)
    .then(location => location.save())
    .then(location => dispatch({type:C.LOCATION_ADDED, location}));
};

export const addBadge = badge => dispatch => {
  return mongoose
    .model('badges')
    .create(badge)
    .then(badge => badge.save())
    .then(badge => dispatch({type:C.BADGE_ADDED, badge}));
};

