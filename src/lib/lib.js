export const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	//  The  min is inclusive  and the max is exclusive
	return Math.floor(Math.random() * (max - min)) + min;
};

const reshuffle = (dic) =>
	dic
		.map((item) => [ Math.random(), item ])
		.sort((a, b) => a[0] - b[0])
		.map((elem) => elem[1]);

export const filterDeletedOff = (arr) => {
	const result = (arr || []).filter((elem) => {
		const russian = Object.keys(elem || {})[0];
		if (russian) {
			const item = localStorage.getItem(russian);
			return item !== 'd';
		} else {
			return false;
		}
	});
	return result;
};

const DICT = 'DICT';
const DICT_NUMBER = '2';

const OLD_LENGTH = 3;

export const getDictionaryWithMix = (dictionaries) => {
	const whichDict = localStorage.getItem(DICT);
	let d;
	let oldD;
	if (whichDict === DICT_NUMBER) {
		d = dictionaries.dictionary2;
		oldD = dictionaries.oldDictionary2;
	} else {
		d = dictionaries.dictionary1;
		oldD = dictionaries.oldDictionary1;
	}
	d = reshuffle(filterDeletedOff(d, null));
	oldD = reshuffle(filterDeletedOff(oldD, OLD_LENGTH)).slice(0, OLD_LENGTH);

	return oldD.concat(d);
};

export const handleDictClicked = (number) => {
	if (number === 2) {
		localStorage.setItem(DICT, DICT_NUMBER);
	} else {
		localStorage.setItem(DICT, '1');
	}
};
