export function every() {
	return async function <A>(array: A[], funct: (element: A, index: number, array: A[]) => Promise<boolean>) {
		for (let i = 0; i < array.length; i++) {
			if (!await funct(array[i], i, array)) return false;
		}
		return true;
	}
}

export function filter() {
	return async function <A>(array: A[], funct: (element: A, index: number, array: A[]) => Promise<boolean>) {
		let r = [];
		for (let i = 0; i < array.length; i++)
			if (await funct(array[i], i, array)) r.push(array[i]);
		return r;
	}
}

export function find() {
	return async function <A>(array: A[], funct: (element: A, index: number, array: A[]) => Promise<boolean>) {
		for (let i = 0; i < array.length; i++)
			if (await funct(array[i], i, array)) return array[i];
		return;
	}
}

export function findIndex() {
	return async function <A>(array: A[], funct: (element: A, index: number, array: A[]) => Promise<boolean>) {
		for (let i = 0; i < array.length; i++)
			if (await funct(array[i], i, array)) return i;
		return -1;
	}
}

export function flatMap() {
	return async function <A, B>(array: A[], funct: (element: A, index: number, array: A[]) => Promise<B>) {
		let r: B[] = [];
		for (let i = 0; i < array.length; i++)
			r[i] = await funct(array[i], i, array);
		return r.flat();
	}
}

export function forEach() {
	return async function <A>(array: A[], funct: (element: A, index: number, array: A[]) => Promise<void>) {
		for (let i = 0; i < array.length; i++)
			funct(array[i], i, array);
	}
}

export function map() {
	return async function <A, B>(array: A[], funct: (element: A, index: number, array: A[]) => Promise<B>) {
		let r: B[] = [];
		for (let i = 0; i < array.length; i++)
			r[i] = await funct(array[i], i, array);
		return r;
	}
}

const _reduce = async function <A, B = A>(array: A[], funct: (previous: B, current: A, index: number, array: A[]) => Promise<B>, accumulator?: B): Promise<typeof accumulator extends undefined ? A : B> {
	if (accumulator) {
		const accumulator = arguments[2] as B;
		let ac = accumulator;
		for (let i = 0; i < array.length; i++)
			ac = await funct(ac, array[i], i, array);
		return ac as typeof accumulator extends undefined ? A : B;
	} else {
		return (await _reduce(array.slice(1), funct, array[0] as unknown) as typeof accumulator extends undefined ? A : B);
	}
}

export function reduce() {
	return _reduce as (<A, B>(array: A[], funct: (previous: B, current: A, index: number, array: A[]) => B, accumulator: B) => B) & (<A>(array: A[], funct: (previous: A, current: A, index: number, array: A[]) => A) => A);
}

// (!) Not sure about this one ;)
const _reduceRight = async function <A, B = A>(array: A[], funct: (previous: B, current: A, index: number, array: A[]) => Promise<B>, accumulator?: B): Promise<typeof accumulator extends undefined ? A : B> {
	if (accumulator) {
		const accumulator = arguments[2] as B;
		let ac = accumulator;
		for (let i = array.length - 1; i >= 0; i--)
			ac = await funct(ac, array[i], i, array);
		return ac as typeof accumulator extends undefined ? A : B;
	} else {
		return (await _reduceRight(array.slice(0, -1), funct, array[array.length - 1] as unknown) as typeof accumulator extends undefined ? A : B);
	}
}

export function reduceRight() {
	return _reduceRight as (<A, B>(array: A[], funct: (previous: B, current: A, index: number, array: A[]) => B, accumulator: B) => B) & (<A>(array: A[], funct: (previous: A, current: A, index: number, array: A[]) => A) => A);
}

export function some() {
	return async function <A>(array: A[], funct: (element: A, index: number, array: A[]) => Promise<boolean>) {
		for (let i = 0; i < array.length; i++)
			if (await funct(array[i], i, array)) return true;
		return false;
	}
}

// (*) This needs to be implemented ASAP
/*
export function sort() {
	return function <A>(array: A[], compareFunct?: (a: A, b: A) => number) {
		return array.sort(compareFunct);
	}
}
*/