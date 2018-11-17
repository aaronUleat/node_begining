// Aninal Base Class

function Animal() {}
Animal.prototype.walk = function () {
    console.log('walking');
};

// Bird Child Class

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);

var bird = new Bird();
bird.walk();

