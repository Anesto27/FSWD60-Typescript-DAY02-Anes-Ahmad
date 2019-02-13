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
var vehicle = /** @class */ (function () {
    function vehicle(a, b, c, d, e, x) {
        this.model = "";
        this.name = "";
        this.horsePower = "";
        this.color = "";
        this.price = "";
        this.img = "";
        this.model = a;
        this.name = b;
        this.horsePower = c;
        this.color = d;
        this.price = e;
        this.img = x;
    }
    vehicle.prototype.sentence = function () {
        return "<div class=\"vehicle\"> <img src=\"" + this.img + "\"><br>" + this.model + "\n\t\t<br><button class=\"btn\">Show details</button><div class=\"result\"></div>";
    };
    vehicle.prototype.sentenceX = function () {
        return "<br>" + this.name + "<br>" + this.horsePower + "\n\t\t<br>" + this.color + "<br>" + this.price + "<br>";
    };
    return vehicle;
}());
var car = new vehicle("Name:BMW", "Model:X6", "Horsepower:250Ps", "Color:metalic black", "Price:100.000$", "../bmw.jpg");
document.write(car.sentence());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(a, b, c, d, e, x, f, g) {
        var _this = _super.call(this, a, b, c, d, e, x) || this;
        _this.weight = "";
        _this.seatHeight = "";
        _this.weight = f;
        _this.seatHeight = g;
        return _this;
    }
    Motor.prototype.sentence2 = function () {
        return "<br><div class=\"motor\">" + _super.prototype.sentence.call(this) + "</div>";
    };
    Motor.prototype.sentenceX = function () {
        return "" + _super.prototype.sentenceX.call(this) + this.weight + "<br>" + this.seatHeight + "!";
    };
    return Motor;
}(vehicle));
var motor = new Motor("Name:Kawasaki Ninja", "Model:ZX-6R", "Horsepower:120Ps", "Color:green", "Price:14.000$", "../ninja.jpg", "Weight:200kg", "Seat height:100cm");
document.write(motor.sentence2());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(a, b, c, d, e, x, i, f) {
        var _this = _super.call(this, a, b, c, d, e, x) || this;
        _this.wheels = "";
        _this.trailers = "";
        _this.wheels = i;
        _this.trailers = f;
        return _this;
    }
    Truck.prototype.sentence3 = function () {
        return "<br><div class=\"truck\">" + _super.prototype.sentence.call(this) + "</div>";
    };
    Truck.prototype.sentenceX = function () {
        return _super.prototype.sentenceX.call(this) + " " + this.wheels + "<br>" + this.trailers;
    };
    return Truck;
}(vehicle));
var truck = new Truck("Name:Volvo", "Model:FM", "Horsepower:500Ps", "Color:gold-yellow", "Price:200.000$", "../volvo.jpg", "Wheels:10", "Trailors:1");
document.write(truck.sentence3());
var arr = [car, motor, truck];
var _loop_1 = function (i) {
    document.getElementsByClassName("btn")[i].addEventListener("click", function () {
        //alert(arr[i].sentenceX());
        document.getElementsByClassName("result")[i].innerHTML += arr[i].sentenceX();
    });
};
for (var i in arr) {
    _loop_1(i);
}
