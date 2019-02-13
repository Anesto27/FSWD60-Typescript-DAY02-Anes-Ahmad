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