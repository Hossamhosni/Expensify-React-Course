import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should render correctly', () => {
	const wrapper = shallow(<ExpenseSummary />);
	expect(wrapper).toMatchSnapshot();
});

test('should render with the correct amount', () => {
	const wrapper = shallow(<ExpenseSummary count={expenses.length} total={selectExpensesTotal(expenses)}/>);
	expect(wrapper).toMatchSnapshot();
});