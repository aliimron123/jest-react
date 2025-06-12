import { renderHook, waitFor } from '@testing-library/react';
import { useConvertTimezone } from './../lib/convert-timezone';
import * as timezoneUtils from '../lib/get-timezone';
import moment from 'moment-timezone';

jest.mock('../lib/get-timezone');

describe('useConvertTimezoneDate', () => {
	it('returns converted time in Asia/Jakarta', async () => {
		(timezoneUtils.getTimezoneFromMoment as jest.Mock).mockReturnValue(
			'Asia/Jakarta',
		);

		const { result } = renderHook(() =>
			useConvertTimezone({ valueTime: '2024-06-12T14:00:00Z', format: 'lll' }),
		);

		const expected = moment
			.utc('2024-06-12T14:00:00Z')
			.tz('Asia/Jakarta')
			.format('lll');

		await waitFor(() => {
			expect(result.current).toBe(expected);
		});
	});

	it('returns "-" if input is empty', async () => {
		(timezoneUtils.getTimezoneFromMoment as jest.Mock).mockReturnValue(
			'Asia/Jakarta',
		);

		const { result } = renderHook(() => useConvertTimezone({ valueTime: '' }));

		await waitFor(() => {
			expect(result.current).toBe('-');
		});
	});
});
