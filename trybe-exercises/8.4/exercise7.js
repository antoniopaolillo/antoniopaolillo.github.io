const assert = require('assert')

class User {
    constructor() {
        this._name = "";
    }
    get name() {
        if(this._name==undefined || this._name == null){
            return "";
        } else {
            return this._name;
        }
    }
    set name(value) {
        this._name=value;
    }
}
    

let user1 = new User("Trybe")

assert.equal(typeof User.prototype, "object")
assert.ok(user1 instanceof User)
assert.equal(user1.name, "")

user1.name = undefined
assert.equal(user1.name, "")

user1.name = null
assert.equal(user1.name, "")

user1.name = "Tryber"
assert.equal(user1.name, "Tryber")