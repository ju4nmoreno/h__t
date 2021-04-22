# Funtional Programming

> Functional programming
> is a programming paradigm
> a style of building the structure and elements of computer programs
> that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data
> [Wikipedia](https://en.wikipedia.org/wiki/Functional_programming)

## Functions

( not a funcition !is a collections on procedures )
Function:

- the semantic relationship between input and computed output
- Avoid side effects with function calls

```javascript
// procedures
function addNumbers(x = 0, y = 0, z = 0, w = 0) {
  var total = x + y + z + w;
  console.log(total);
}

// procedures
function extraNumbers(x = 2, ...args) {
  return addNumbers(x, 40, ...args);
}

extraNumbers(); // 42
extraNumbers(3, 8, 11); // 62

function tuple(x, y) {
  return [x + 1, y - 1];
}

var [a, b] = tuple(...[5, 10]);

a; // 6
b; // 9
```

##### Side Effects

Side Effects:

- I/O (console, files, etc)
- Database Storage
- Network Calls
- DOM
- Timestamps
- Random Numbers
- CPU Heat
- CPU Time Delay

```javascript
// side Effects
function shipping() {
  rate = (size + 1) * weight + speed;
}

var rate;
var size = 12;
var weight = 4;
var speed = 5;
shipping();
rate; // 57

size = 8;
speed = 6;
shipping();
rate; // 42

// no side effects

function shipping_(size, weight, speed) {
  return (size + 1) * weight + speed;
}

var rate;

rate = shipping_(12, 4, 5); // 57
rate = shipping_(8, 4, 6); // 42
```

##### Pure Functions

```javascript
const z = 1;
//pure
function addTwo(x, y) {
  return x + y;
}
// impure
function addAnother(x, y) {
  return addTwo(x, y) + z;
}

addAnother(20, 21); // 42
```

##### Same Input, Same Output

##### Function Purity: Level of Confidence

##### Extracting Impurity

##### Containing Impurity

##### Function Arguments

```javascript
// unary
function increment(x) {
  return sum(x, 1);
}
// binary
function sum(x, y) {
  return x + y;
}
```

##### Arguments Shape Adapters

```javascript
function unary(fn) {
  return function one(arg) {
    return fn(arg);
  }
}

function binary(fn) {
  return fucntion two(arg1, arg2) {
    return fn(arg1, arg2);
  }
}

function f(...args) {
  retrn args:
}

var g = unary(f);
var h = binary(f);

g(1,2,3,4); // [1]
h(1,2,3,4); // [2]
```

##### Point-Free

Equational Reasoning

```javascript
// example 1
getPerson(function onPerson(person) {
  return renderPerson(person);
});

getPerson(renderPerson);
```

```javascript
// example 2
function not(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

function isOdd(v) {
  return v % 2 == 1;
}

var isEven = not(isOdd);

isEven(4); // true
```

## Closure

> Closure is when a function
> "remembers" the variables around
> it even then that function is
> executed alsewhere.

```javascript
function makeCounter() {
  var counter = 0;
  return function increment() {
    return ++counter;
  };
}

var c = makeCounter();
c(); // 1
c(); // 2
c(); // 3
```

```javascript
function unary(fn) {
  return function one(arg) {
    return fn(arg);
  };
}
```

```javascript
function addAnother(z) {
  return addTwo(x,y) {
    return x + y + z;
  }
}
```

## Composition

## Immutability

## Recursion

## Lists / Data Structures

## Async

## FP Libraries
