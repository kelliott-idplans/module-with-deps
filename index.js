let flatten = require('array-flatten');

module.exports = function moduleWithDeps() {
  return flatten([1, [2, [3, [4, [5], 6], 7], 8], 9]);
}