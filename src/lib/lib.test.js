import { getRandomInt, reshuffle } from 'lib/lib';

describe('getRandomInt test', () => {
	it('getRandomInt', () => {
		expect(getRandomInt(5, 10)).toBeGreaterThanOrEqual(5);
	});

	it('getRandomInt', () => {
		expect(getRandomInt(6, 10)).toBeGreaterThanOrEqual(6);
	});

	it('getRandomInt', () => {
		expect(getRandomInt(0, 10)).toBeGreaterThanOrEqual(0);
	});

	it('getRandomInt', () => {
		expect(getRandomInt(0, 1)).toBe(0);
	});

	it('getRandomInt', () => {
		expect(getRandomInt(5, 10)).toBeLessThan(10);
	});

	it('getRandomInt', () => {
		expect(getRandomInt(0, 5)).toBeLessThan(5);
	});
});

describe('reshuffle', () => {
	it('reshuffle 1', () => {
		expect(reshuffle([ 5, 10 ]).length).toBe(2);
	});
	it('reshuffle 2', () => {
		expect(reshuffle([])).toEqual([]);
	});
	it('reshuffle 3', () => {
		expect(reshuffle([ 1 ])).toEqual([ 1 ]);
	});
});
