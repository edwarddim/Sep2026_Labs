import { Vl as map, ou as __read, su as __spreadArray } from "./core-D4iryrxe.js";
// node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
var isArray$1 = Array.isArray;
function callOrApply(fn, args) {
	return isArray$1(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
	return map(function(args) {
		return callOrApply(fn, args);
	});
}
// node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf;
var objectProto = Object.prototype;
var getKeys = Object.keys;
function argsArgArrayOrObject(args) {
	if (args.length === 1) {
		var first_1 = args[0];
		if (isArray(first_1)) return {
			args: first_1,
			keys: null
		};
		if (isPOJO(first_1)) {
			var keys = getKeys(first_1);
			return {
				args: keys.map(function(key) {
					return first_1[key];
				}),
				keys
			};
		}
	}
	return {
		args,
		keys: null
	};
}
function isPOJO(obj) {
	return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
}
// node_modules/rxjs/dist/esm5/internal/util/createObject.js
function createObject(keys, values) {
	return keys.reduce(function(result, key, i) {
		return result[key] = values[i], result;
	}, {});
}
export { argsArgArrayOrObject as n, mapOneOrManyArgs as r, createObject as t };
