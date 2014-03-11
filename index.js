'use strict';

var path2regex = require('path-to-regexp');


module.exports = function reverend(route, obj) {
    var keys;

    keys = [];
    path2regex(route, keys);

    keys.forEach(function (key) {
        var value, regex;

        value = obj[key.name];
        regex = '\\:' + key.name;

        if (key.optional) {
            // Include the trailing '?' in the replacement.
            regex += '\\?';
            if (value === undefined) {
                // No value so remove potential trailing '/'
                // since the path segment is optional.
                value = '';
                regex += '\\/?';
            }
        } else if (value === undefined) {
            value = '';
        }

        value = encodeURIComponent(value);
        route = route.replace(new RegExp(regex, 'g'), value);
    });

    return route;
};
