var EArray = require('./earray');

var foo = new EArray();

foo.on('push', function(item) {
  console.log('item pushed -> ' + item);
});

foo.on('pop', function(item) {
  console.log('item poped -> ' + item);
});

foo.push('test');
foo.push('test1');
foo.push('test2');
console.log(foo);

foo.pop();
console.log(foo);
