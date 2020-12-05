"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const array = __importStar(require("../array"));
const concurrent = __importStar(require("../concurrent/array"));
const sequential = __importStar(require("../sequential/array"));
(async () => {
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    const map = array.map();
    const reduce = array.reduce();
    console.log(map([1, 2, 3], e => e + 2));
    console.log(reduce([1, 2, 3], (a, b) => a + b));
    console.log(reduce([1, 2, 3], (a, b) => a - b, 0));
    const logWaitAndReturn = async (k, msg = 'Called on') => {
        console.log(`${msg}: ${k}`);
        await sleep(1000);
        console.log(`post ${msg}: ${k}`);
        return k;
    };
    await sequential.map()([1, 2, 3], e => logWaitAndReturn(e, 'seq'));
    await concurrent.map()([1, 2, 3], e => logWaitAndReturn(e, 'conc'));
    console.log(await [1, 2, 3].reduce(async (a, b) => await (a) + b, Promise.resolve(0)));
})();
