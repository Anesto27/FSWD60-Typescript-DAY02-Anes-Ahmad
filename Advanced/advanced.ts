
class vehicle{
	model="";
	name="";
	horsePower="";
	color="";
	price="";
	img="";

constructor(a,b,c,d,e,x){
	this.model=a;
	this.name=b;
	this.horsePower=c;
	this.color=d;
	this.price=e;
	this.img=x;

}
	sentence(){
		return `<div class="vehicle"> <img src="${this.img}"><br>${this.model}
		<br><button class="btn">Show details</button><div class="result"></div>`

    
}
	sentenceX(){
		return `<br>${this.name}<br>${this.horsePower}
		<br>${this.color}<br>${this.price}<br>`
	}
	   
     

}
     
var car = new vehicle("Name:BMW","Model:X6","Horsepower:250Ps","Color:metalic black","Price:100.000$","../bmw.jpg");
document.write(car.sentence());


class Motor extends vehicle{
	weight="";
	seatHeight="";

	constructor(a,b,c,d,e,x,f,g){
		super(a,b,c,d,e,x);
		this.weight=f;
		this.seatHeight=g;
	}
	sentence2(){
		return `<br><div class="motor">${super.sentence()}</div>`
	}
	sentence2X(){
		return `${this.weight}<br>${this.seatHeight}!`
	}
}

var motor=new Motor("Name:Kawasaki Ninja","Model:ZX-6R","Horsepower:120Ps","Color:green","Price:14.000$","../ninja.jpg","Weight:200kg","Seat height:100cm");
document.write(motor.sentence2());


class Truck extends vehicle{
	wheels="";
	trailers="";

	constructor(a,b,c,d,e,x,i,f){
		super(a,b,c,d,e,x);
		this.wheels=i;
		this.trailers=f;
	}
	sentence3(){
		return `<br><div class="truck">${super.sentence()}</div>`
	}
	sentence3X(){
		return `${this.wheels}<br>${this.trailers}`
	}
}

	var truck= new Truck("Name:Volvo","Model:FM","Horsepower:500Ps","Color:gold-yellow","Price:200.000$","../volvo.jpg","Wheels:10","Trailors:1");
	document.write(truck.sentence3());

var arr = [car,motor,truck];

for(let i in arr){
	document.getElementsByClassName("btn")[i].addEventListener("click",function(){
		//alert(arr[i].sentenceX());
		document.getElementsByClassName("result")[i].innerHTML=arr[i].sentenceX();
		document.getElementsByClassName("result")[i].innerHTML+=arr[i].sentence2X();
		document.getElementsByClassName("result")[i].innerHTML+=arr[i].sentence3X();
	})
}

