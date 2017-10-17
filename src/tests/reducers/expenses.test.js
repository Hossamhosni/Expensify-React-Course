import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '2'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '4'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const action = {
		type: 'ADD_EXPENSE',
		expense: {
			description: 'Rent',
			amount: 10,
			note: '',
			createdAt: 222222,
			id: '4'
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, {
		id: '4',
		description: 'Rent',
		amount: 10,
		createdAt: 222222,
		note: ''
	}]);
});

test('should edit an expense', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '2',
		updates: {
			note: 'Changed'
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[1].note).toBe('Changed');
});

test('should not edit an expense if id not found', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '5',
		updates: {
			note: 'Changed'
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});