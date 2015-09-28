angular
  .module('WeddingApp')
  .filter('reverse', reverse);

function reverse() {
  return function(items) {
    return items.slice().reverse();
  }
}
