import { rentalData } from './data';
import { createStore, combineReducers } from 'redux';


export function initStore() {
  const reducers = combineReducers({
    rentals: () => {
      return (rentalData);
      
    },
    data1: () => ['1','2','3','4'],
    data2: () => ['a','b','c','d'] 
  })
  const store = createStore(reducers);
  return store;
}