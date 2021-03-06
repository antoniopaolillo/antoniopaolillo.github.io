const assert = require('assert')

class Dog {
    constructor(name) {
        this.name = name
    }
    bark () {
     return `${this.name} is barking`  
   } 
}

let dog1 = new Dog("Apolo")

assert.equal(typeof Dog.prototype, "object")
assert.ok(dog1 instanceof Dog)
assert.equal(dog1.name, "Apolo")
assert.equal(dog1.bark(), "Apolo is barking")

let dog2 = new Dog("Arcos")

assert.equal(typeof Dog.prototype, "object")
assert.ok(dog2 instanceof Dog)
assert.equal(dog2.name, "Arcos")
assert.equal(dog2.bark(), "Arcos is barking")