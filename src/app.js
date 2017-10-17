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


console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));