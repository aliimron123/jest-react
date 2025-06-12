import { getTimezoneFromMoment } from '@/lib/get-timezone';
import moment from 'moment-timezone';

jest.mock('moment-timezone', () => {
	const originalModule = jest.requireActual('moment-timezone');
	return {
		...originalModule,
		tz: {
			...originalModule.tz,
			guess: jest.fn(),
		},
	};
});

describe('getTimezoneFromMoment', () => {
	it('should return Asia/Jakarta if timezone is Asia/Jakarta', () => {
		(moment.tz.guess as jest.Mock).mockReturnValue('Asia/Jakarta');
		expect(getTimezoneFromMoment()).toBe('Asia/Jakarta');
	});

	it('should return Asia/Makassar if timezone is not Asia/Jakarta', () => {
		(moment.tz.guess as jest.Mock).mockReturnValue('Asia/Tokyo');
		expect(getTimezoneFromMoment()).toBe('Asia/Makassar');
	});
});
