export const convertCurrency = (val: string | number) => {
	const locale = 'id-ID';
	let number = val;
	if (typeof val === 'string') {
		// Remove "Rp", dots, commas, and other non-digit symbols except for decimal point
		const cleaned = val
			.replace(/Rp/g, '')
			.replace(/\./g, '.')
			.replace(/\./g, '') // remove thousands separator
			.replace(/,/g, '') // replace comma with dot for decimal
			.replace(/[^0-9.-]/g, '')
			.replace(/\s/g, '');

		number = parseFloat(cleaned);
	} else {
		number = val;
	}

	if (isNaN(number)) return 'Rp0';
	const currency = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0,
	}).format(number);
	return currency;
};
