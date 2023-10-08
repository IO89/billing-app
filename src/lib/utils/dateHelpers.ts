import { format, isBefore } from 'date-fns';
/*
 * This takes a yyyy-mm-dd date and m-d-yyyy
 * @param {string} date - a date in yyyy-mm-dd format
 * @returns {string} - a date in m/d/yyyy format
 * */
export const convertToUSDate = (date: string): string => {
	return format(new Date(date), 'm/d/yyyy');
};

/*
 * This takes a yyyy-mm-dd date and returns true if it is before today
 * @param {string} dueDate - a date in yyyy-mm-dd format
 * @returns {boolean} - true if the due date is before today
 * */
export const isLate = (dueDate: string): boolean => {
	const today = new Date();
	const due = new Date(dueDate);
	return isBefore(today, due);
};
