import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should setup edit expense action object', () => {
	const action = editExpense('123abc', {
		note: 'A test note',
		description: 'A test description',
		amount: 123
	});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'A test note',
			amount: 123,
			description: 'A test description'
		}
	});
});

test('should setup add expense action object',() => {
	const expenseData = {
		note: 'A test note',
		amount: 123,
		description: 'A test description',
		createdAt: 1000
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	});
});

test('should setup add expense action object with default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			description: "",
			note: '',
			amount: 0,
			createdAt: 0,
			id: expect.any(String)
		}
	});
});