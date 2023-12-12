// resources used:
// https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck
// https://stackoverflow.com/questions/64695628/get-value-from-promise-inside-a-function

function countMatches (arr, key) {
    function call1(n, cb) {
        cb(null, n == key ? 1 : 0);
    }
    function call2(prev, curr, cb) {
        cb(null, prev + curr);
    }
    const async = require('async');

    return async.map(arr, call1).then(results => async.reduce(results, 0, call2));
}
