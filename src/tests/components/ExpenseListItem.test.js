import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem', () => {
	const expense = {
		description: 'Test desc.',
		amount: 22222,
		createdAt: 333,
		id: '10'
	};
	const wrapper = shallow(<ExpenseListItem {...expense}/>);
	expect(wrapper).toMatchSnapshot();
});