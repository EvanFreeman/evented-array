function EArray() {
  this.handlers = {};
}

EArray.prototype = Object.create(Array.prototype);
EArray.prototype.constructor = EArray;

EArray.prototype.on = function(method, callback) {
  this.handlers[method] = callback;
}

EArray.prototype.push = function(item) {
  [].push.call(this, item);
  if (this.handlers.push) {
    this.handlers.push(item);
  }
}

EArray.prototype.pop = function() {
  var item = [].pop.call(this, item);
  if (this.handlers.pop) {
    this.handlers.pop(item);
  }
}

module.exports = EArray;


