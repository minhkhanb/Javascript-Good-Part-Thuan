function User (name, email) {
    this.name = name;
    this.email = email;
}

User.prototype = {
    constructor: User,
    getName: function() {
        return this.name;
    },
    getEmail: function () {
        return this.email;
    }
}

var userST = new User("KhaLe", "khale@mtech");
var name = userST.getName();
var email = userST.getEmail();
console.log(name, '----', email);
