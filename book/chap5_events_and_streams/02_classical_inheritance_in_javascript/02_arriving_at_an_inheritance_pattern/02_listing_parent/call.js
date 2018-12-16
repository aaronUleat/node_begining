var foo = {};
var bar = {};
// A function that uses `this`

function func(val) {
    this.val = val;
}

func.call(foo, 123);

func.call(bar, 456);

console.log(foo.val);
console.log(bar.val);