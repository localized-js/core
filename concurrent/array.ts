export function every() {
	return async function <A>(array: A[], funct: (element: A, index: number, array: A[]) => Promise<boolean>) {
		return !(await Promise.all(array.map((...args) => funct(...args)))).includes(false);
	}
}

export function filter() {
	return async function <A>(array: A[], funct: (element: A, index: number, array: A[]) => Promise<boolean>) {
		const toKeep = Promise.all(array.map((...args) => funct(...args)));
		return array.filter((_, ind) => toKeep[ind]);
	}
}

// (v)
export function find() {
	return async function <A>(array: A[], funct: (element: A, index: number, array: A[]) => Promise<boolean>) {
		return await filter()(array, funct)[0];
	}
}

// (v)
export function findIndex() {
	return async function <A>(array: A[], funct: (element: A, index: number, array: A[]) => Promise<boolean>) {
		return array.indexOf(await filter()(array, funct)[0]);
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
		return await Promise.all(array.map((...args) => funct(...args)));
	}
}

export function map() {
	return async function <A, B>(array: A[], funct: (element: A, index: number, array: A[]) => Promise<B>) {
		return await Promise.all(array.map((...args) => funct(...args)));
	}
}

export function some() {
	return async function <A>(array: A[], funct: (element: A, index: number, array: A[]) => Promise<boolean>) {
		return (await Promise.all(array.map((...args) => funct(...args)))).includes(true);
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