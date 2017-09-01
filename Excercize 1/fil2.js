/*
//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2
}


var mul = function (n1, n2) {
    return n1 - n2 + n1;
}


try {
    //Callback example
    var cb = function (n1, n2, callback) {
        return "Result from the two numbers: " + n1 + callback.name + n2 + "=" + callback(n1, n2);
    };
    throw new Error('Whoops!');
} catch (e) {
    console.log(e.name + ': ' + e.message);
}


typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
typeof callback === "function" //Will fail if callback is undefined or is not a function

console.log(cb(4, 3, sub)); // What will it print
console.log(cb(3, 3, add)); // What will it print (and what was the problem)
console.log(cb(2, 3, mul));
console.log(cb(12, 2, function (n1, n2) {
    return n1 / n2;
}));

var names = ["Peter", "Henning", "Pedro", "Per", "Bo", "Ea", "Oa", "Bob"];
var namesFilter = names.filter(function (element) {
    return element.length <= 3;
});

names.forEach(function (element) {
    console.log(element);
}, this);

namesFilter.forEach(function (element) {
    console.log(element);
}, this);

var namesUppercase = names.map(function (element) {
    return element.toUpperCase();
});

namesUppercase.forEach(function(element){
    console.log(element);
}, this);

var htmlNames = names.join("</li><li>");
var concatStart = "<ul><li>";
var namesUL = concatStart.concat(htmlNames);
var namesULFinal = namesUL.concat("</li></ul>");
//<ul><li>Lars</li><li>Peter</li><li>Jan</li><li>Ian</li></ul>

console.log(htmlNames);
console.log(namesULFinal);
*/

/*
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

  var carsNew = cars.filter(function(element){
      return element.year>1999;
  })

  var carsVolvo = cars.filter(function(element){
      return element.make==='Volvo';
  })

  var carsCheap = cars.filter(function(element){
      return element.price<5000;
  })

  var carsToSQL = function(element){
    return "INSERT INTO cars (id,year,make,model,price) VALUES ("+ element.id+"," +element.year+ ",'"+element.make+"','"+element.model+"',"+element.price +" );";
  };
  
  console.log(carsNew.map(carsToSQL).toString());

  var msgPrinter = function(msg,delay){
    setTimeout(function(){
      console.log(msg);
    },delay);
  };
  console.log("aaaaaaaaaa");
  msgPrinter ("bbbbbbbbbb",2000);
  console.log("dddddddddd");
  msgPrinter ("eeeeeeeeee",1000);
  console.log("ffffffffff");
  

  function Person(name){
    this.name = name;
    console.log("Name: "+ this.name);
    setTimeout(function(){
      console.log("Hi  "+this.name);  //Explain this .. Pas
    },2000);
  }

  //Store a reference to the outer this
function Person(name){
    this.name = name;
    var self = this;
    console.log("Name: "+ this.name);
    setTimeout(function(){
      console.log("Hi  "+self.name);  
    },2000);
  }

//Using the bind(..) function
function Person(name){
    this.name = name;  
    console.log("Name: "+ this.name);
    setTimeout(function(){
      console.log("Hi  "+this.name);  
    }.bind(this),2000);
  }
    
  //call it like this (do it, even if you know it’s silly ;-)
  Person("Kurt Wonnegut");  //This calls the function
  console.log("I'm global: "+ name);  //Explain this . Den tjekker den sidste var name, der er global.
  
  //var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
  //console.log("I'm global: "+ name);  //What’s different ? When it's instantiated as a var, you need to specify, which object
  
  var greeter = function(){
    console.log(this.message);
  };
  var comp1 = { message: "Hello World" };
  var comp2 = { message: "Hi" };
  
  var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
  var g2 = greeter.bind(comp2 );//And here another “this”
  setTimeout(g1,700);
  setTimeout(g2,200);
  
var person = {
    name: "Fia",
    age: 22,
    birthday: "11/9",
    email: "HeyMedDig@Hej.Hej"
};
delete person.name;
person.nationality = "British";
for (prop in person) {
    console.log(prop, person[prop]);
}
*/
function person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

function getPersonDetails(person){
    for (prop in person) {
        console.log( prop, person[prop]);
    }
}

var brian = new person("Brian", "Pedersen", 22);
getPersonDetails(brian);



