var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.sentence = function () {
        return "Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
var test = new Person("Anton", "27", "Developer");
document.write(test.sentence());
