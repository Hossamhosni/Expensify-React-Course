import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = (props) => (
	<div>
  		<p>Viewing {props.count} expenses totalling {numeral(props.total / 100).format('$0,0.00')}</p>
 	</div>
);

const mapStateToProps = (state) => {
	return {
		count: selectExpenses(state.expenses, state.filters).length,
		total: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
	};
};

export default connect(mapStateToProps)(ExpenseSummary);