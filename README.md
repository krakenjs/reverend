# reverend

Merge an express-style path string with data to create a valid path.

[![Build Status](https://travis-ci.org/krakenjs/reverend.png)](https://travis-ci.org/krakenjs/reverend)

## Usage
```javascript
var reverend = require('reverend');
```

### reverend(path, object);
* `path`  (*String*) - An express-style path
* `object` (*Object*) - An object with keys matching the tokens to be replaced in the route.

```javascript
'use strict';

var reverend = require('reverend');


var path;

path = reverend('/user/:id', { id: 5 });
// '/user/5';

path = reverend('/user/:id/:operation?', { id: 5 });
// '/user/5/';

path = reverend('/user/:id/:operation', { id: 5, operation: address });
// '/user/5/address';
```

## License
MIT

## Tests, Coverage, Linting
```javascript
$ npm test
```
```javascript
$ npm run cover
```
```javascript
$ npm run lint
```
