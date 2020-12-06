import * as array from './array';
import * as sequentialArray from './sequential/array';
import * as concurrentArray from './concurrent/array';

export = {
	array,
	sequential: {
		array: sequentialArray
	},
	concurrent: {
		array: concurrentArray
	},
};