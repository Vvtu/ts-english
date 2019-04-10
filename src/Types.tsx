import { string } from 'prop-types';

export type dictType = { rus: string; eng: string };

export type dictionariesType = {
	dictionary2: dictType[];
	dictionary20: dictType[];
	oldDictionary2: dictType[];
	dictionary1: dictType[];
	dictionary10: dictType[];
	oldDictionary1: dictType[];
};
