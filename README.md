# rcb

[Ramda](https://github.com/ramda/ramda) [Cookbook](https://github.com/ramda/ramda/wiki/Cookbook) implementation.

## !!! Warning !!!

This library is not production ready, but contains workable ideas and concepts.
Rcb is no longer maintained and has been assimilated into [ramda-adjunct](https://github.com/char0n/ramda-adjunct)
codebase. 

## Installation

```
npm install rcb
```

## Usage

```javascript
var R = require('rcb');
```

## API

```javascript
// applyTo :: ({k: v} -> a) -> {k: v} -> a
R.applyTo(fn, obj);

// assign :: String -> a -> {k: v} -> {k: v}
R.assign(prop, val, obj);

// defaults :: {k: v} -> {k: v} -> {k: v}
R.defaults(a, b);

// filterObj :: (a -> Boolean) -> {k: v} -> {k: v}
R.filterObj(fn, obj);

// indexBy :: String -> [{k: v}] -> {String: {k: v}}
R.indexBy(prop, list);

// isArray :: * -> Boolean
R.isArray(obj);

// isBoolean :: * -> Boolean
R.isBoolean(obj);

// isDate :: * -> Boolean
R.isDate(obj);

// isFunction :: * -> Boolean
R.isFunction(obj);

// isNumber :: * -> Boolean
R.isNumber(obj);

// isNumeric :: * -> Boolean
R.isNumeric(obj);

// isObject :: * -> Boolean
R.isObject(obj);

// isPlainObject :: * -> Boolean
R.isPlainObject(obj);

// isString :: * -> Boolean
R.isString(obj);

// isUndefned :: * -> Boolean
R.isUndefned(obj);

// isValidDate :: * -> Boolean
R.isValidDate(obj);

// list :: a... -> [a...]
R.list();

// listN :: Number -> a... -> [a...]
R.listN(n);

// mapKeys :: (String -> String) -> {k: v} -> {k: v}
R.mapKeys(fn, obj);

// methodNames :: Object -> [String]
R.methodNames(obj);

// objFromKeys :: (String -> a) -> [String] -> {Strng: a}
R.objFromKeys(fn, keys);

// objSize :: Object -> Number
R.objSize(obj);

// pickIndexes :: [Number] -> [a] -> [a]
R.pickIndexes(indexes, list);

// sliceFrom :: Number -> [a] -> [a]
R.sliceFrom(index, list);

// sliceTo :: Number -> [a] -> [a]
R.sliceTo(index, list);

// toBoolean :: * -> Boolean
R.toBoolean(obj);

// toDate :: * -> Date
R.toDate(obj);

// toNumber :: * -> Number
R.toNumber(obj);

// toString :: * -> String
R.toString(obj);
```

## License

MIT
