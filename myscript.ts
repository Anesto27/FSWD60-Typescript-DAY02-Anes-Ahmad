class Person{
	name="";
	age="";
	jobTitle="";

	constructor(name,age,jobTitle){
		this.name= name;
		this.age= age;
		this.jobTitle=jobTitle;
	}
	sentence(){
		return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
	}

}

var test = new Person("Anton","27","Developer");

document.write(test.sentence());


class Student extends Person{
	salary="";
	jobLocation="";

	constructor(name,age,jobTitle,a,b){
		super(name,age,jobTitle);
		this.salary=a;
		this.jobLocation=b;
	}
	sentence2(){
		return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle} and I get ${this.salary} 
		every month, and I work in ${this.jobLocation}`
	}

}

 var test2=new Student("Ahmad","27","Junior Developer","2000$","Vienna");
 document.write(test2.sentence2());
