console.log("Hello, TypeScript!");
// Variables
var name = "Vihanga";
var age = 25;
var girls = ["Anju", "dilki", "Dula"];
console.log(name);
console.log(age);
console.log(girls);
// Arrays ,Tupple
var car = ["BMW", 2020];
console.log(car);
console.log(typeof car);
var vehicles = {
    brand: "BMW",
    year: 2020,
};
var car_2 = {
    brand: "BMW",
    model: "X5",
    year: 2020,
    country: {
        name: "Germany",
        code: "DE"
    }
};
console.log(car_2);
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color);
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
var car_color = Color.Red;
console.log(car_color);
// Functions
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
greet("Vihanga");
function add(a, b) {
    return a + b;
}
console.log(add(2004, 2005));
function Fcar(brand, model, year) {
    console.log("Car: ".concat(brand, " ").concat(model, " ").concat(year));
}
Fcar("BMW", "X5", 2020);
// Casting 
var value = "123";
var numValue = parseInt(value);
var numValue_2 = value;
console.log(numValue);
console.log(numValue_2);
// Generics
function identity(arg) {
    return arg;
}
console.log(identity("Hello"));
console.log(identity(42));
var person1 = {
    firstName: "Vihanga",
    age: 25,
    isMarried: false
};
console.log(person1);
var person_2 = {
    firstName: "Nimsara",
    age: 24
};
console.log(person_2);
var person_3 = {
    firstName: "Nimsara",
    age: 24
};
console.log(person_3);
var personRecord = {
    "1": {
        firstName: "Vihanga",
        age: 25,
        isMarried: false
    },
    "2": {
        firstName: "Nimsara",
        age: 24,
        isMarried: false
    }
};
console.log(personRecord);
