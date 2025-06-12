import { render, screen, fireEvent } from '@testing-library/react';
import InputCurrency from '@/components/input-currency';

const setup = () => {
	const utils = render(<InputCurrency />);
	const input = screen.getByRole('textbox') as HTMLInputElement;
	return {
		input,
		...utils,
	};
};

describe('CurrencyInput Component', () => {
	test('renders input with default value', () => {
		const { input } = setup();
		fireEvent.change(input, { target: { value: '' } });
		expect(input).toBeInTheDocument();
		expect(input.value).toBe('');
	});
});

describe('Currency Must Number', () => {
	test('render value must number', () => {});
});
