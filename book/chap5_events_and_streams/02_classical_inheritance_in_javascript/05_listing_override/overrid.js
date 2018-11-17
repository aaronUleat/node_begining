// util function

var inherits = require("util").inherits;

// base

function Base() {
    this.message = "message";
}
Base.prototype.foo = function () {
    return this.message + " base foo";
}

//Child

function Child() {
    Base.call(this);
}
inherits(Child, Base);

// Override parent behavior in child

Child.prototype.foo = function () {
    // Call base implementation + customize
    return Base.prototype.foo.call(this) + "child foo";
}

// TEST

var child = new Child();
console.log(child.foo());