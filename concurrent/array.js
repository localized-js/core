"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.some = exports.map = exports.forEach = exports.flatMap = exports.findIndex = exports.find = exports.filter = exports.every = void 0;
function every() {
    return async function (array, funct) {
        return !(await Promise.all(array.map((...args) => funct(...args)))).includes(false);
    };
}
exports.every = every;
function filter() {
    return async function (array, funct) {
        const toKeep = Promise.all(array.map((...args) => funct(...args)));
        return array.filter((_, ind) => toKeep[ind]);
    };
}
exports.filter = filter;
// (v)
function find() {
    return async function (array, funct) {
        return await filter()(array, funct)[0];
    };
}
exports.find = find;
// (v)
function findIndex() {
    return async function (array, funct) {
        return array.indexOf(await filter()(array, funct)[0]);
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
        await Promise.all(array.map((...args) => funct(...args)));
        return;
    };
}
exports.forEach = forEach;
function map() {
    return async function (array, funct) {
        return await Promise.all(array.map((...args) => funct(...args)));
    };
}
exports.map = map;
function some() {
    return async function (array, funct) {
        return (await Promise.all(array.map((...args) => funct(...args)))).includes(true);
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
