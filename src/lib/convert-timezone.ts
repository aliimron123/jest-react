import { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { getTimezoneFromMoment } from './get-timezone';

// // handle timezone SSR
export const useConvertTimezone = ({
	valueTime,
	format = 'llll',
}: {
	valueTime: string;
	format?: string;
}) => {
	const [convertedTime, setConvertedTime] = useState('-');

	useEffect(() => {
		const timezone = getTimezoneFromMoment();
		const time = moment.utc(valueTime).tz(timezone);
		const formattedTime = valueTime ? time.format(format) : '-';
		setConvertedTime(formattedTime);
	}, [valueTime, format]);

	return convertedTime;
};

export const useConvertTimezoneTime = (valueTime: string): string => {
	const [convertedTime, setConvertedTime] = useState('-');

	useEffect(() => {
		const timezone = getTimezoneFromMoment();
		const time = moment.utc(valueTime);
		const formattedTime = valueTime
			? time.tz(timezone).format('HH:mm:ss')
			: '-';
		setConvertedTime(formattedTime);
	}, [valueTime]);

	return convertedTime;
};

// //  handle timezone in CSR
// export const convertTimezoneDate = (valueTime: string): string => {
// 	const timezone = getTimezone();
// 	const time = moment.utc(valueTime);
// 	const convertedTime = valueTime ? time.tz(timezone).format('lll') : '-';
// 	return convertedTime;
// };

// export const convertTimezoneTime = (valueTime: string): string => {
// 	const timezone = getTimezone();
// 	const time = moment.utc(valueTime);
// 	const convertedTime = valueTime ? time.tz(timezone).format('HH:mm:ss') : '-';
// 	return convertedTime;
// };

// export const convertUTCTimezoneTime = (valueTime: string): string => {
// 	const timezone = getTimezone();
// 	const time = moment.utc(valueTime).tz(timezone);
// 	return time.format('YYYY-MM-DD HH:mm:ss');
// };

// export const convertUTCTimeNoFormat = (
// 	valueTime: string | undefined,
// ): moment.Moment => {
// 	const timezone = getTimezone();
// 	const time = moment.utc(valueTime).tz(timezone);
// 	return time;
// };
