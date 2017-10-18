
const selectExpensesTotal = (expenses) => {
	return expenses.reduce((curr, next) => {
		return curr += next.amount;
	}, 0);
};

export default selectExpensesTotal;