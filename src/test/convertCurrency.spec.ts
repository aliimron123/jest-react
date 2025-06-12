import { convertCurrency } from '@/lib/convert-currency';

const normalize = (str: string) => str.replace(/\s/g, '');

describe('convertCurrency', () => {
	it('format number correctly', () => {
		expect(normalize(convertCurrency(1000))).toBe('Rp1.000');
		expect(normalize(convertCurrency(10000))).toBe('Rp10.000');
	});

	it('format string correctly', () => {
		expect(normalize(convertCurrency('1000'))).toBe('Rp1.000');
		expect(normalize(convertCurrency('1.000.000'))).toBe('Rp1.000.000');
	});

	it('format beside number either alphabet or symbol', () => {
		expect(normalize(convertCurrency('abs'))).toBe('Rp0');
	});

	it('formats string with commas or symbols correctly', () => {
		expect(normalize(convertCurrency('1,000,000'))).toBe('Rp1.000.000');
		expect(normalize(convertCurrency('Rp2.500.000'))).toBe('Rp2.500.000');
	});
});
