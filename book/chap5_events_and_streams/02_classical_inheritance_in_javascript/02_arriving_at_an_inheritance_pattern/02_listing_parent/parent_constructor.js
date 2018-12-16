function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function (destination) {
    console.log(this.name, 'is walking to', destination);
}

function Bird(name) {
    Animal.call(this, name)
}

var bird = new Bird("sparrow");
console.log(bird);