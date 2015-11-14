[![wercker status](https://app.wercker.com/status/8e89a5f826d71ce848cce7c97116372f/s "wercker status")](https://app.wercker.com/project/bykey/8e89a5f826d71ce848cce7c97116372f)

# object-lookup
Safe object lookup of nested properties.

## Installation
```
  npm install object-lookup --save
```

## Usage

The module exposes a method that checks if the given nested property of an object exists and if it does it returns its value, otherwise it returns false.

```js
var lookup = require('object-lookup');

var object1 = {
    one: 'one',
    two: 'two',
    three: {
        four: 'hello'
    }
}

console.log(lookup(object1, 'one')); // one
console.log(lookup(object1, 'three.four')); // hello
console.log(lookup(object1, 'three.four.five')); // false
console.log(lookup(object1, 'three.four.five.six')); // prints false

```

## Tests
To run the tests execute:
```
    npm test
```

## License

Copyright (c) 2015, Dinos Theodorou

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
