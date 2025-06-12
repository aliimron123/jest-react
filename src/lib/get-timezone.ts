import moment from 'moment-timezone';

export const getTimezoneFromMoment = (): string => {
	const timezone = moment.tz.guess();

	if (timezone === 'Asia/Jakarta') {
		try {
			return 'Asia/Jakarta';
		} catch (error) {
			console.error('Error parsing cookie data', error);
		}
	}

	return 'Asia/Makassar';
};
