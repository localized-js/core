"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = exports.of = exports.from = exports.length = exports.toLocalString = exports.toString = exports.values = exports.unshift = exports.splice = exports.sort = exports.some = exports.slice = exports.shift = exports.reverse = exports.reduceRight = exports.reduce = exports.push = exports.pop = exports.map = exports.lastIndexOf = exports.keys = exports.join = exports.indexOf = exports.includes = exports.forEach = exports.flatMap = exports.flat = exports.findIndex = exports.find = exports.filter = exports.fill = exports.every = exports.entries = exports.copyWithin = exports.concat = void 0;
function concat() {
    return function (array, ...elements) {
        return array.concat(...elements);
    };
}
exports.concat = concat;
function copyWithin() {
    return function (array, target, start, end) {
        return array.copyWithin(target, start, end);
    };
}
exports.copyWithin = copyWithin;
function entries() {
    return function (array) {
        return array.entries();
    };
}
exports.entries = entries;
function every() {
    return function (array, funct) {
        return array.every(funct);
    };
}
exports.every = every;
function fill() {
    return function (array, value, start, end) {
        return array.fill(value, start, end);
    };
}
exports.fill = fill;
function filter() {
    return function (array, funct) {
        return array.filter(funct);
    };
}
exports.filter = filter;
function find() {
    return function (array, funct) {
        return array.find(funct);
    };
}
exports.find = find;
function findIndex() {
    return function (array, funct) {
        return array.findIndex(funct);
    };
}
exports.findIndex = findIndex;
function flat() {
    return function (array, depth) {
        return array.flat(depth);
    };
}
exports.flat = flat;
function flatMap() {
    return function (array, funct) {
        return array.flatMap(funct);
    };
}
exports.flatMap = flatMap;
function forEach() {
    return function (array, funct, thisArg) {
        return array.forEach(funct, thisArg);
    };
}
exports.forEach = forEach;
function includes() {
    return function (array, searchElement, fromIndex) {
        return array.includes(searchElement, fromIndex);
    };
}
exports.includes = includes;
function indexOf() {
    return function (array, searchElement, fromIndex) {
        return array.indexOf(searchElement, fromIndex);
    };
}
exports.indexOf = indexOf;
function join() {
    return function (array, separator) {
        return array.join(separator);
    };
}
exports.join = join;
function keys() {
    return function (array) {
        return array.keys();
    };
}
exports.keys = keys;
function lastIndexOf() {
    return function (array, searchElement, fromIndex) {
        return array.lastIndexOf(searchElement, fromIndex);
    };
}
exports.lastIndexOf = lastIndexOf;
function map() {
    return function (array, funct) {
        return array.map(funct);
    };
}
exports.map = map;
function pop() {
    return function (array) {
        return array.pop();
    };
}
exports.pop = pop;
function push() {
    return function (array, ...elements) {
        return array.push(...elements);
    };
}
exports.push = push;
const _reduce = function (array, funct, accumulator) {
    if (accumulator)
        return array.reduce(funct, accumulator);
    else
        return array.reduce(funct);
};
function reduce() {
    return _reduce;
}
exports.reduce = reduce;
const _reduceRight = function (array, funct, accumulator) {
    if (accumulator)
        return array.reduceRight(funct, accumulator);
    else
        return array.reduceRight(funct);
};
function reduceRight() {
    return _reduceRight;
}
exports.reduceRight = reduceRight;
function reverse() {
    return function (array) {
        return array.reverse();
    };
}
exports.reverse = reverse;
function shift() {
    return function (array) {
        return array.shift();
    };
}
exports.shift = shift;
function slice() {
    return function (array, start, end) {
        return array.slice(start, end);
    };
}
exports.slice = slice;
function some() {
    return function (array, funct) {
        return array.some(funct);
    };
}
exports.some = some;
function sort() {
    return function (array, compareFunct) {
        return array.sort(compareFunct);
    };
}
exports.sort = sort;
function splice() {
    return function (array, begin, deleteCount, ...elements) {
        return array.splice(begin, deleteCount, ...elements);
    };
}
exports.splice = splice;
function unshift() {
    return function (array, ...elements) {
        return array.unshift(...elements);
    };
}
exports.unshift = unshift;
function values() {
    return function (array) {
        return array.values();
    };
}
exports.values = values;
function toString() {
    return function (array) {
        return array.toString();
    };
}
exports.toString = toString;
function toLocalString() {
    return function (array) {
        return array.toLocaleString();
    };
}
exports.toLocalString = toLocalString;
function length() {
    return function (array) {
        return array.length;
    };
}
exports.length = length;
const _from = function (arrayLike, funct) {
    if (funct)
        return Array.from(arrayLike, funct);
    else
        return Array.from(arrayLike);
};
function from() {
    return _from;
}
exports.from = from;
function of() {
    return function (...elements) {
        return Array.of(...elements);
    };
}
exports.of = of;
function isArray() {
    return function (arg) {
        return Array.isArray(arg);
    };
}
exports.isArray = isArray;
