console.log("Hello, TypeScript!");
// Variables
const name: string = "Vihanga";
const age: number = 25;
const girls: string[] = ["Anju", "dilki", "Dula"];

console.log(name);
console.log(age);
console.log(girls);

// Arrays ,Tupple

let car: [string, number] = ["BMW", 2020];
console.log(car);
console.log(typeof car);

type Brand = string; // alias

let vehicles: { brand: Brand; year: number } = {
  brand: "BMW",
  year: 2020,
};


// interfaces

interface Country{
    name: string;
    code: string;
}


interface Vehicle {
    brand: Brand;
    model: string;
    year: number;
    country: Country;
}

const car_2: Vehicle = {
    brand: "BMW",
    model: "X5",
    year: 2020,
    country: {
        name: "Germany",
        code: "DE"
    }
}

console.log(car_2);



// Enum

enum Color {
    Red,
    Green,
    Blue
}

console.log(Color);
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);    

const car_color: Color = Color.Red;
console.log(car_color);


// Functions

function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

greet("Vihanga");

function add(a: number,b: number): number{
    return a + b;
}

console.log(add(2004,2005));


function Fcar (brand: string, model: string | number, year: number) {
    console.log(`Car: ${brand} ${model} ${year}`);
}

Fcar("BMW", "X5", 2020);


// Casting 

const value = "123";

const numValue : number = parseInt(value);
const numValue_2 : number = value as unknown as number;

console.log(numValue);
console.log(numValue_2);

// Generics

function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(42));

// Utility Types

interface person{
    firstName : string ,
    age : number ,
    isMarried  : boolean
}

const person1: person = {
    firstName: "Vihanga",
    age: 25,
    isMarried: false
}
console.log(person1);

const person_2 : Partial<person> = {
    firstName :"Nimsara",
    age: 24
}
console.log(person_2);


const person_3 : Pick<person, "firstName" | "age"> = {
    firstName :"Nimsara",
    age: 24
}
console.log(person_3);

const person_4 : Omit<person, "firstName" | "age"> = {
    isMarried: false
}
console.log(person_4);



// Record 

type PersonRecord = Record<string, person>;

const personRecord: PersonRecord = {
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

type Year = number | string | boolean

const correctYear : Exclude<Year, boolean> = 2025;