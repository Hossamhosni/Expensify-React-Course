import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should correctly return the total cost of the expenses', () => {
	const total = selectExpensesTotal(expenses);
	expect(total).toBe(114192);
});

test('should correctly return the amount of no expenses', () => {
	const total = selectExpensesTotal([]);
	expect(total).toBe(0);
});

test('should correctly return the amount of there is one expense', () => {
	const total = selectExpensesTotal([expenses[1]]);
	expect(total).toBe(109500);
});