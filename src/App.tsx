import { convertCurrency } from './lib/convert-currency';

function App() {
	const number = 1000;
	return <>{convertCurrency(number)}</>;
}

export default App;
