import { dictType } from '../Types';

export const getRandomInt = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	//  The  min is inclusive  and the max is exclusive
	return Math.floor(Math.random() * (max - min)) + min;
};

const reshuffle = (dic: any[]) =>
	dic
		.map((item) => [ Math.random(), item ])
		.sort((a, b) => a[0] - b[0])
		.map((elem) => elem[1]);

export const filterDeletedOff = (arr: dictType[]) => {
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

const OLD_LENGTH = 6;

export const getDictionaryWithMix = (dictionaries: {
	dictionary2: dictType[];
	dictionary20: dictType[];
	oldDictionary2: dictType[];
	dictionary1: dictType[];
	dictionary10: dictType[];
	oldDictionary1: dictType[];
}) => {
	const whichDict = localStorage.getItem(DICT);
	let d: dictType[];
	let oldD: dictType[];
	if (whichDict === DICT_NUMBER) {
		d = dictionaries.dictionary2;
		oldD = dictionaries.oldDictionary2.concat(dictionaries.dictionary20);
	} else {
		d = dictionaries.dictionary1;
		oldD = dictionaries.oldDictionary1.concat(dictionaries.dictionary10);
	}
	d = reshuffle(filterDeletedOff(d));
	oldD = reshuffle(filterDeletedOff(oldD)).slice(0, OLD_LENGTH);

	return oldD.concat(d);
};

export const handleDictClicked = (number: number) => {
	if (number === 2) {
		localStorage.setItem(DICT, DICT_NUMBER);
	} else {
		localStorage.setItem(DICT, '1');
	}
};
