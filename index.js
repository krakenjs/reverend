/*───────────────────────────────────────────────────────────────────────────*\
 │  Copyright (C) 2014 eBay Software Foundation                               │
 │                                                                            │
 │  Licensed under the Apache License, Version 2.0 (the "License");           │
 │  you may not use this file except in compliance with the License.          │
 │  You may obtain a copy of the License at                                   │
 │                                                                            │
 │    http://www.apache.org/licenses/LICENSE-2.0                              │
 │                                                                            │
 │  Unless required by applicable law or agreed to in writing, software       │
 │  distributed under the License is distributed on an "AS IS" BASIS,         │
 │  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  │
 │  See the License for the specific language governing permissions and       │
 │  limitations under the License.                                            │
 \*───────────────────────────────────────────────────────────────────────────*/
 // RegExp patterns used from: https://github.com/component/path-to-regexp (MIT)
'use strict';

var path2regex = require('path-to-regexp');


module.exports = function reverend(route, obj) {

    // Support `route` being an array (which path-to-regexp supports), and
    // prefer the first item because we want the best-fit URL.
    if (Array.isArray(route)) {
        route = route[0];
    }

    // Restrict `route` to Strings since a RegExp route can't be used to
    // generate a path (path-to-regexp supports RegExp route paths).
    if (typeof route !== 'string') {
        throw new TypeError('route must be a String path');
    }
 
    var generator = path2regex.compile(route);
    return generator(obj);
};
