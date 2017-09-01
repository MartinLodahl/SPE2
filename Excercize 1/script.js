//alert("Hello Pewple");

//var name = "Pedro";
//console.log("name "+name);
//name = 45;
//console.log("name "+name);

//const age = 23;
//let address = "Bunderup Vej 8";

//var myArray = [false, "", 2];
//console.log(myArray[2]);

//var myObj = {
//  name: "Henrik",
//age: 34,
//address: "MyHome"
//}

//console.log(myObj.name);
//console.log(myObj["name"]);

//var numbe = myFunc();
//console.log(numbe);
//function myFunc (){
//  console.log(myObj.age+myObj.age);

//return 3;
//}

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var all = boys.concat(girls);

var allComma = all.join();
var allHyphen = all.join('-');

all.push("Lone", "Gitte");
all.unshift("Hans", "Kurt");
all.shift();
all.pop();
all.splice(3, 2);
all.reverse();
all.reverse();
all.sort();
all = all.map(up);

function up(arg1) {
  return arg1.toUpperCase();
}
var iorl = all.filter(startsWithIorL);

function startsWithIorL(arg1) {
  if (arg1.startsWith("I", 0) || arg1.startsWith("L", 0)) {
    return arg1;
  }
}