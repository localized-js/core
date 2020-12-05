export function concat() {
	return function <A>(array: A[], ...elements: ConcatArray<A>[]) {
		return array.concat(...elements);
	}
}

export function copyWithin() {
	return function <A>(array: A[], target: number, start?: number, end?: number) {
		return array.copyWithin(target, start, end);
	}
}

export function entries() {
	return function <A>(array: A[]) {
		return array.entries();
	}
}

export function every() {
	return function <A>(array: A[], funct: (element: A, index: number, array: A[]) => element is A) {
		return array.every(funct)
	}
}

export function fill() {
	return function <A>(array: A[], value: A, start?: number, end?: number) {
		return array.fill(value, start, end);
	}
}

export function filter() {
	return function <A>(array: A[], funct: (element: A, index: number, array: A[]) => element is A) {
		return array.filter(funct);
	}
}

export function find() {
	return function <A>(array: A[], funct: (element: A, index: number, array: A[]) => element is A) {
		return array.find(funct);
	}
}

export function findIndex() {
	return function <A>(array: A[], funct: (element: A, index: number, array: A[]) => element is A) {
		return array.findIndex(funct);
	}
}

export function flat() {
	return function <A>(array: A[], depth?: number) {
		return array.flat(depth);
	}
}

export function flatMap() {
	return function <A, B>(array: A[], funct: (element: A, index: number, array: A[]) => B) {
		return array.flatMap(funct);
	}
}

export function forEach() {
	return function <A>(array: A[], funct: (element: A, index: number, array: A[]) => void, thisArg?: any) {
		return array.forEach(funct, thisArg);
	}
}

export function includes() {
	return function <A>(array: A[], searchElement: A, fromIndex?: number) {
		return array.includes(searchElement, fromIndex);
	}
}

export function indexOf() {
	return function <A>(array: A[], searchElement: A, fromIndex?: number) {
		return array.indexOf(searchElement, fromIndex);
	}
}

export function join() {
	return function <A>(array: A[], separator?: string) {
		return array.join(separator);
	}
}

export function keys() {
	return function <A>(array: A[]) {
		return array.keys();
	}
}

export function lastIndexOf() {
	return function <A>(array: A[], searchElement: A, fromIndex?: number) {
		return array.lastIndexOf(searchElement, fromIndex);
	}
}

export function map() {
	return function <A, B>(array: A[], funct: (element: A, index: number, array: A[]) => B) {
		return array.map(funct);
	}
}

export function pop() {
	return function <A>(array: A[]) {
		return array.pop();
	}
}

export function push() {
	return function <A>(array: A[], ...elements: A[]) {
		return array.push(...elements);
	}
}

const _reduce = function <A, B>(array: A[], funct: (previous: B, current: A, index: number, array: A[]) => B, accumulator?: B) {
	if (accumulator) return array.reduce(funct, accumulator);
	else return array.reduce(funct as unknown as <A>(a: A, b: A, i: number, y: A[]) => A);
}

export function reduce() {
	return _reduce as (<A, B>(array: A[], funct: (previous: B, current: A, index: number, array: A[]) => B, accumulator: B) => B) & (<A>(array: A[], funct: (previous: A, current: A, index: number, array: A[]) => A) => A);
}

const _reduceRight = function <A, B>(array: A[], funct: (previous: B, current: A, index: number, array: A[]) => B, accumulator?: B) {
	if (accumulator) return array.reduceRight(funct, accumulator);
	else return array.reduceRight(funct as unknown as <A>(a: A, b: A, i: number, y: A[]) => A);
}

export function reduceRight() {
	return _reduceRight as (<A, B>(array: A[], funct: (previous: B, current: A, index: number, array: A[]) => B, accumulator: B) => B) & (<A>(array: A[], funct: (previous: A, current: A, index: number, array: A[]) => A) => A);
}

export function reverse() {
	return function <A>(array: A[]) {
		return array.reverse();
	}
}

export function shift() {
	return function <A>(array: A[]) {
		return array.shift();
	}
}

export function slice() {
	return function <A>(array: A[], start?: number, end?: number) {
		return array.slice(start, end);
	}
}

export function some() {
	return function <A>(array: A[], funct: (element: A, index: number, array: A[]) => unknown) {
		return array.some(funct);
	}
}

export function sort() {
	return function <A>(array: A[], compareFunct?: (a: A, b: A) => number) {
		return array.sort(compareFunct);
	}
}

export function splice() {
	return function <A>(array: A[], begin: number, deleteCount?: number, ...elements: A[]) {
		return array.splice(begin, deleteCount, ...elements);
	}
}

export function unshift() {
	return function <A>(array: A[], ...elements: A[]) {
		return array.unshift(...elements);
	}
}

export function values() {
	return function <A>(array: A[]) {
		return array.values();
	}
}

export function toString() {
	return function <A>(array: A[]) {
		return array.toString();
	}
}

export function toLocalString() {
	return function <A>(array: A[]) {
		return array.toLocaleString();
	}
}

export function length() {
	return function <A>(array: A[]) {
		return array.length;
	}
}

const _from = function <A, U>(arrayLike: ArrayLike<A>, funct?: (element: A, index: number) => U) {
	if (funct) return Array.from(arrayLike, funct);
	else return Array.from(arrayLike);
}

export function from() {
	return _from as (<A, U>(arrayLike: ArrayLike<A>, funct: (element: A, index: number) => U) => U[] & (<A>(arrayLike: ArrayLike<A>) => A[]));
}

export function of() {
	return function <A>(...elements: A[]) {
		return Array.of(...elements);
	}
}

export function isArray(arg: any): arg is any[] {
	return Array.isArray(arg);
}