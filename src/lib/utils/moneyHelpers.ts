import type { Invoice, LineItem } from '../../global';

export const sumLineItems = (lineItems: LineItem[] | undefined): number => {
	if (!lineItems) return 0;
	return lineItems.reduce((acc, curr) => acc + curr.amount, 0);
};

export const centsToDollars = (cents: number): string => {
	const dollars = cents / 100;
	const addDecimals = twoDecimals(dollars);
	return addThousandsSeparator(addDecimals);
};

export const twoDecimals = (num: number): string => {
	return num.toFixed(2);
};

export const addThousandsSeparator = (num: string): string => {
	return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const sumInvoices = (invoices: Invoice[] | undefined): number => {
	if (!invoices) return 0;
	return invoices.reduce((acc, curr) => {
		const invoiceSum = sumLineItems(curr.lineItems);
		return acc + invoiceSum;
	}, 0);
};
