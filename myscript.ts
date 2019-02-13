
// create a class called Person with three properties (name,age,jobTitle)
class Person{
	name="";
	age="";
	jobTitle="";
// create a constructor with three parameters inside 
	constructor(name,age,jobTitle){
		this.name= name;
		this.age= age;
		this.jobTitle=jobTitle;
		// with this. we point at the properties of the class Person 
	}
	// we create a function called sentence and return the string with the pointed properies using this.
	sentence(){
		return `<p>Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}</p>`;
	}

}
// we create a new varbiable called test and insert three new parameters inside of Person
var test = new Person("Anton","27","Developer");
// display with document write the variable with the function sentence 
document.write(test.sentence());

// we create a new class called Student which is a child of the Class Person. We do by extends the class.
class Student extends Person{
	salary="";
	jobLocation="";
// we create a new constructor which has the same parameters like the constructor before and add two new parameters called (a,b)
	constructor(name,age,jobTitle,a,b){
		super(name,age,jobTitle);
		this.salary=a;
		this.jobLocation=b;
	}
	// create a new function called sentence2 and insert the previous return statement into the new return statement and just add the new properties inside the string.
	sentence2(){
		return `<p>Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle} and I get ${this.salary} 
		every month, and I work in ${this.jobLocation}</p>`
	}

}
// create a new varbiable called test2 which includes a new class called student which 5 parameters inside
 var test2=new Student("Ahmad","27","Junior Developer","2000$","Vienna");
// same like before ---.---
 document.write(test2.sentence2());
// for basic exercise 3 we have to export an object based on the class to a other ts file. In this case we use export and insert the classes,varibales functions etc
 //inside the brackets 
 export { Person,test2 }
