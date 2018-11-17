// util function

var inherits = require('util').inherits;

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function (destination) {
    console.log(this.name, 'is walking to', destination);
}


// Bird Child Class

function Bird(name) {
    Animal.call(this, name);
}

inherits(Bird, Animal);

// Aditional member functions

Bird.prototype.fly = function (destination) {
    console.log(this.name, "is flying to", destination);
}

var bird = new Bird('sparrow');
bird.walk('sydney'); // sparrow is walking to sydney
bird.fly('melbourne'); // sparrow is flying to melbourne