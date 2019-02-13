var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, jobTitle, a, b) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = "";
        _this.jobLocation = "";
        _this.salary = a;
        _this.jobLocation = b;
        return _this;
    }
    Student.prototype.sentence2 = function () {
        return "Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle + " and I get " + this.salary + " \n\t\tevery month, and I work in " + this.jobLocation;
    };
    return Student;
}(Person));
var test2 = new Student("Ahmad", "27", "Junior Developer", "2000$", "Vienna");
document.write(test2.sentence2());
