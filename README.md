# nums

A JavaScript library to generate an array of increasingly large or small
numbers.

If you found this library through Google, well done.


## Install

```
$ npm install --save nums
```


## Usage

```js
var nums = require('nums');

nums(5);
//=> [1, 2, 3, 4, 5]

nums(5, 10);
//=> [5, 6, 7, 8, 9, 10]

nums(3, -2);
//=> [3, 2, 1, 0, -1, -2]
```


## License

Released under the MIT license.
