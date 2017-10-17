import { createStore, combineReducers } from 'redux';

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses)
});

console.log(store.getState());

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: 2000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('e'));

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

store.dispatch(setStartDate(-2000));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate(2222));

const demoState = {
	expenses: [{
		id: 'dklsajdasd',
		description: 'Desc',
		note: 'This was the final payment',
		amount: 54500,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	}
};
