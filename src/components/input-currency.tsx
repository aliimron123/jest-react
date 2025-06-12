import { useState } from 'react';

type InputCurrencyProps = {
	value?: string;
	onChange?: (value: string) => void;
};

const formatCurrency = (value: string) => {
	return value
		.replace(/\D/g, '') // Remove non-numeric characters
		.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Add thousand separator
};

const InputCurrency: React.FC<InputCurrencyProps> = ({
	value = '',
	onChange,
}) => {
	const [inputValue, setInputValue] = useState(value);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formattedValue = formatCurrency(e.target.value);
		setInputValue(formattedValue);
		if (onChange) {
			onChange(formattedValue);
		}
	};

	return (
		<input
			type='text'
			value={inputValue}
			onChange={handleChange}
			role='textbox'
		/>
	);
};

export default InputCurrency;
