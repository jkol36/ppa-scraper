import { fetchCustomers, saveCustomers } from './helpers'
import mongoose from 'mongoose'
import {customers} from './models'
import { initializeDatabase } from './config'
import { start } from 'repl';
import { store } from './store';
require('dotenv').load()



console.log(store.getState())