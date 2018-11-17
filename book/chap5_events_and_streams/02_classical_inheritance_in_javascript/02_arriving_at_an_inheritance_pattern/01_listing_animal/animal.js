function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function (destination) {
    console.log(this.name, 'is walking to', destination);
}

var animal = new Animal('elephant');
animal.walk('melbourne');
function Bird(name) {
    var ave = new Animal(name);
}
var bird = new Bird("sparrow");

console.log(bird);