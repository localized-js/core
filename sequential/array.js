"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.some = exports.reduceRight = exports.reduce = exports.map = exports.forEach = exports.flatMap = exports.findIndex = exports.find = exports.filter = exports.every = void 0;
function every() {
    return async function (array, funct) {
        for (let i = 0; i < array.length; i++) {
            if (!await funct(array[i], i, array))
                return false;
        }
        return true;
    };
}
exports.every = every;
function filter() {
    return async function (array, funct) {
        let r = [];
        for (let i = 0; i < array.length; i++)
            if (await funct(array[i], i, array))
                r.push(array[i]);
        return r;
    };
}
exports.filter = filter;
function find() {
    return async function (array, funct) {
        for (let i = 0; i < array.length; i++)
            if (await funct(array[i], i, array))
                return array[i];
        return;
    };
}
exports.find = find;
function findIndex() {
    return async function (array, funct) {
        for (let i = 0; i < array.length; i++)
            if (await funct(array[i], i, array))
                return i;
        return -1;
    };
}
exports.findIndex = findIndex;
function flatMap() {
    return async function (array, funct) {
        let r = [];
        for (let i = 0; i < array.length; i++)
            r[i] = await funct(array[i], i, array);
        return r.flat();
    };
}
exports.flatMap = flatMap;
function forEach() {
    return async function (array, funct) {
        for (let i = 0; i < array.length; i++)
            funct(array[i], i, array);
    };
}
exports.forEach = forEach;
function map() {
    return async function (array, funct) {
        let r = [];
        for (let i = 0; i < array.length; i++)
            r[i] = await funct(array[i], i, array);
        return r;
    };
}
exports.map = map;
const _reduce = async function (array, funct, accumulator) {
    if (accumulator) {
        const accumulator = arguments[2];
        let ac = accumulator;
        for (let i = 0; i < array.length; i++)
            ac = await funct(ac, array[i], i, array);
        return ac;
    }
    else {
        return await _reduce(array.slice(1), funct, array[0]);
    }
};
function reduce() {
    return _reduce;
}
exports.reduce = reduce;
// (!) Not sure about this one ;)
const _reduceRight = async function (array, funct, accumulator) {
    if (accumulator) {
        const accumulator = arguments[2];
        let ac = accumulator;
        for (let i = array.length - 1; i >= 0; i--)
            ac = await funct(ac, array[i], i, array);
        return ac;
    }
    else {
        return await _reduceRight(array.slice(0, -1), funct, array[array.length - 1]);
    }
};
function reduceRight() {
    return _reduceRight;
}
exports.reduceRight = reduceRight;
function some() {
    return async function (array, funct) {
        for (let i = 0; i < array.length; i++)
            if (await funct(array[i], i, array))
                return true;
        return false;
    };
}
exports.some = some;
// (*) This needs to be implemented ASAP
/*
export function sort() {
    return function <A>(array: A[], compareFunct?: (a: A, b: A) => number) {
        return array.sort(compareFunct);
    }
}
*/ 
