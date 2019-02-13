"use strict";
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
exports.__esModule = true;
// create a class called Person with three properties (name,age,jobTitle)
var Person = /** @class */ (function () {
    // create a constructor with three parameters inside 
    function Person(name, age, jobTitle) {
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
        // with this. we point at the properties of the class Person 
    }
    // we create a function called sentence and return the string with the pointed properies using this.
    Person.prototype.sentence = function () {
        return "<p>Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle + "</p>";
    };
    return Person;
}());
exports.Person = Person;
// we create a new varbiable called test and insert three new parameters inside of Person
var test = new Person("Anton", "27", "Developer");
// display with document write the variable with the function sentence 
document.write(test.sentence());
// we create a new class called Student which is a child of the Class Person. We do by extends the class.
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // we create a new constructor which has the same parameters like the constructor before and add two new parameters called (a,b)
    function Student(name, age, jobTitle, a, b) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = "";
        _this.jobLocation = "";
        _this.salary = a;
        _this.jobLocation = b;
        return _this;
    }
    // create a new function called sentence2 and insert the previous return statement into the new return statement and just add the new properties inside the string.
    Student.prototype.sentence2 = function () {
        return "<p>Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle + " and I get " + this.salary + " \n\t\tevery month, and I work in " + this.jobLocation + "</p>";
    };
    return Student;
}(Person));
// create a new varbiable called test2 which includes a new class called student which 5 parameters inside
var test2 = new Student("Ahmad", "27", "Junior Developer", "2000$", "Vienna");
exports.test2 = test2;
// same like before ---.---
document.write(test2.sentence2());
