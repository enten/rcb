// rcb v0.0.9
// https://github.com/enten/rcb
// Ramda may be freely distributed under the MIT license.

var R = module.exports = require('ramda');

/**
 * Apply an object to a function.
 *
 * @sig ({k: v} -> a) -> {k: v} -> a
 */
R.applyTo = R.curry(function (fn, obj) {
  return fn(obj);
});

/**
 * Mutates an object by setting or overriding the specified property with
 * the given value.
 *
 * @sig String -> a -> {k: v} -> {k: v}
 */
R.assign = R.curry(function (prop, val, obj) {
  obj[prop] = val;
  return obj;
});

/**
 * Set properties only if they don't exist.
 *
 * Useful for passing defaults similarly to lodash's `_.defaults`.
 *
 * @sig {k: v} -> {k: v} -> {k: v}
 */
R.defaults = R.flip(R.merge);

/**
 * Filters an object y property.
 *
 * @sig (a -> Boolean) -> {k: v} -> {k: v}
 */
R.filterObj = R.curry(function (fn, obj) {
  return R.pick(R.filter(function (key) { return fn(obj[key]); }, R.keys(obj)), obj);
});

/**
 * Index objects by property name.
 *
 * Given a property name to index-by and a list of objects, each guaranteed
 * to have the indexing property set, returns an object indexing the objects
 * by their keys.
 *
 * Notes:
 *  - If multiple objects have the same value for the indexing property,
 *    the behavior is unreliable: only one object is collected, and there's
 *    no guarantee as to which one would it be.
 *  - If one or more objects don't have the indexing property, the indexing
 *    value is undefined.
 *  - The indexing property values are coerced to strings.
 *
 * @sig String -> [{k: v}] -> {String: {k: v}}
 */
R.indexBy = R.curry(function(prop, list) {
  return R.mapObj(R.head, R.groupBy(R.prop(prop), list));
});

/**
 * See if an object is an array.
 *
 * @sig * -> Boolean
 */
R.isArray = R.is(Array);

/**
 * See if an object is not an array.
 *
 * @sig * -> Boolean
 */
R.isNotArray = R.complement(R.isArray);

/**
 * See if an object is a boolean.
 *
 * @sig * -> Boolean
 */
R.isBoolean = R.is(Boolean);

/**
 * See if an object is not a boolean.
 *
 * @sig * -> Boolean
 */
R.isBoolean = R.complement(R.isBoolean);

/**
 * See if an object is a date.
 *
 * @sig * -> Boolean
 */
R.isDate = R.is(Date);

/**
 * See if an object is not a date.
 *
 * @sig * -> Boolean
 */
R.isNotDate = R.complement(R.isDate);

/**
 * See if an object is a function.
 *
 * @sig * -> Boolean
 */
R.isFunction = R.is(Function);

/**
 * See if an object is not a function.
 *
 * @sig * -> Boolean
 */
R.isNotFunction = R.complement(R.isFunction);

/**
 * See if an object is a number.
 *
 * @sig * -> Boolean
 */
R.isNumber = R.is(Number);

/**
 * See if an object is not a number.
 *
 * @sig * -> Boolean
 */
R.isNotNumber = R.complement(R.isNumber);

/**
 * See if an object is a numeric.
 *
 * @sig * -> Boolean
 */
R.isNumeric = R.pipe(R.when(R.complement(R.isNumber), Number), R.complement(isNaN));

/**
 * See if an object is not a number.
 *
 * @sig * -> Boolean
 */
R.isNotNumeric = R.complement(R.isNumeric);

/**
 * See if an object is an object.
 *
 * @sig * -> Boolean
 */
R.isObject = R.is(Object);

/**
 * See if an object is not an object.
 *
 * @sig * -> Boolean
 */
R.isNotObject = R.complement(R.isObject);

/**
 * See if an object is a plain object.
 *
 * @sig * -> Boolean
 */
R.isPlainObject = R.both(R.isObject, R.both(R.isNotArray, R.isNotFunction));

/**
 * See if an object is not a plain object.
 *
 * @sig * -> Boolean
 */
R.isNotPlainObject = R.complement(R.isPlainObject);

/**
 * See if an object is a string.
 *
 * @sig * -> Boolean
 */
R.isString = R.is(String);

/**
 * See if an object is not a string.
 *
 * @sig * -> Boolean
 */
R.isNotString = R.complement(R.isString);

/**
 * See if an object is a valid date.
 *
 * @sig * -> Boolean
 */
R.isValidDate = function (obj) {
  if (!R.isDate(obj)) {
    obj = R.toDate(obj);
  }
  return !isNaN(obj.getTime());
};

/**
 * See if an object is not a valid date.
 *
 * @sig * -> Boolean
 */
R.isNotValidDate = R.complement(R.isValidDate);


/**
 * See if an object is undefined.
 *
 * @sig * -> Boolean
 */
R.isUndefined = function (value) {
  return typeof value === 'undefined';
};

/**
 * See if an object is not undefined.
 *
 * @sig * -> Boolean
 */
R.isNotUndefined = R.complement(R.isUndefined);

/**
 * Create a `list` function.
 *
 * @sig a... -> [a...]
 */
R.list = R.unapply(R.identity);

/**
 * Create a list from arguments with specified size.
 *
 * @sig Number -> a... -> [a...]
 */
R.listN = R.curryN(2, function (n) {
  var list, size;
  list = R.apply(R.list)(R.tail(arguments));
  size = list.length;
  if (size > n) {
    list.length = n;
  }
  if (size < n) {
    list = R.concat(list, R.repeat(undefined, n-size));
  }
  return list;
});

/**
 * Map keys of an object.
 *
 * @sig (String -> String) -> {k: v} -> {k: v}
 */
R.mapKeys = R.curry(function (fn, obj) {
  return R.fromPairs(R.map(R.adjust(fn, 0), R.toPairs(obj)));
});

/**
 * Get an object's method names.
 *
 * @sig Object -> [String]
 */
R.methodNames = R.compose(R.keys, R.pickBy(R.is(Function)));

/**
 * Make an object out of keys, with values derived from them.
 *
 * @sig (String -> a) -> [String] -> {String: a}
 */
R.objFromKeys = R.curry(function (fn, keys) {
  return R.zipObj(keys, R.map(fn, keys));
});

/**
 * Get object size.
 *
 * @sig Object -> Number
 */
R.objSize = R.nAry(1, R.pipe(
  R.when(R.is(Object), R.keys),
  R.when(R.is(Boolean), R.cond([[R.equals(false), R.always(null)], [R.T, R.always(1)]])),
  R.when(R.is(Number), R.toString),
  R.ifElse(R.isNil, R.always(0), R.length)
));

/**
 * Pick values a from list by indexes.
 *
 * @sig [Number] -> [a] -> [a]
 */
R.pickIndexes = R.compose(R.alues, R.pickAll);

/**
 * Returns the elements of the given list or string from index.
 *
 * @sig Number -> [a] -> [a]
 */
R.sliceFrom = R.slice(R.__, Infinity);

/**
 * Returns the elements of the given list or string to index.
 *
 * @sig Number -> [a] -> [a]
 */
R.sliceTo = R.slice(0);

/**
 * Converts a value to a `Boolean`.
 *
 * @sig * -> Boolean
 */
R.toBoolean = function (value) {
  if(R.isString(value)) {
    return R.not(R.contains(R.toLower(value), ['false', 'n', 'no']));
  }
  if(R.isNumber(value)) {
    return (value * 1) > 0 ? true : false;
  }
  return !!value;
};

/**
 * Converts a value to a `Date`.
 *
 * @sig * -> Date
 */
R.toDate = function () {
  if (R.objSize(arguments) === 1 && R.isNumeric(arguments[0])) {
    arguments[0] = R.toNumber(arguments[0]);
  }
  return new (Function.prototype.bind.apply(Date, R.concat([null], R.values(arguments))));
};

/**
 * Converts a value to a `Number`.
 *
 * @sig * -> Number
 */
R.toNumber = Number;

/**
* Converts a value to a `String`.
 *
 * @sig * -> String
 */
R.toString = String;
