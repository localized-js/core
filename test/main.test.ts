import * as array from '../array';
import * as concurrent from '../concurrent/array';
import * as sequential from '../sequential/array';

(async () => {
	const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

	const map = array.map();
	const reduce = array.reduce();

	console.log(map([1, 2, 3], e => e + 2));
	console.log(reduce([1, 2, 3], (a, b) => a + b));
	console.log(reduce([1, 2, 3], (a, b) => a - b, 0));

	const logWaitAndReturn = async <T>(k: T, msg: string = 'Called on') => {
		console.log(`${msg}: ${k}`);
		await sleep(1000);
		console.log(`post ${msg}: ${k}`);
		return k;
	}

	await sequential.map()([1, 2, 3], e => logWaitAndReturn(e, 'seq'));
	await concurrent.map()([1, 2, 3], e => logWaitAndReturn(e, 'conc'));

	console.log(await [1, 2, 3].reduce(async (a, b) => await (a) + b, Promise.resolve(0)));
})();