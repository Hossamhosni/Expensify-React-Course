import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';


import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter'

import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses';

import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill", amount: 1000 }));
store.dispatch(addExpense({ description: "Gas Bill", amount: 1232, createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 32132132, createdAt: 23 }));

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));