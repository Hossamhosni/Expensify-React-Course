import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should setup sortBy to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')		
	};
	const action = { type: 'SORT_BY_DATE' };
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
	const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'Water' });
	expect(state.text).toBe('Water');
});

test('should set startDate', () => {
	const state = filtersReducer(undefined, { type: 'SET_START_DATE', 'startDate': moment(0)});
	expect(state.startDate).toEqual(moment(0));
});

test('should set endDate', () => {
	const state = filtersReducer(undefined, { type: 'SET_END_DATE', 'endDate': moment(0)});
	expect(state.endDate).toEqual(moment(0));
});