var divs = document.getElementsByTagName("div");
var i;
for (i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "grey";
}
document.getElementById("but").addEventListener("click", function () {
    document.getElementById("hej").style.backgroundColor = "blue";
    document.getElementById("med").style.backgroundColor = "green";
    document.getElementById("dig").style.backgroundColor = "yellow";
});

var hej = document.getElementById("hej");
hej.onclick = function () {
    document.getElementById("p").innerText = "Hi from " + hej.id;
}

function functionOuther(id) {
    //console.log(id);
    document.getElementById("p").innerText = id;
}
var names = ["Peter", "Hans"];
p1Names(names);

function p1Names(names) {
    var htmlNames = names.join("</li><li>");
    var concatStart = "<ul><li>";
    var namesUL = concatStart.concat(htmlNames);
    var namesULFinal = namesUL.concat("</li></ul>");
    //<ul><li>Lars</li><li>Peter</li><li>Jan</li><li>Ian</li></ul>
    document.getElementById("p1").innerHTML = namesULFinal;
}



function updateP1Names() {
    event.preventDefault();
    var nameValue = document.getElementById("name").value;
    names.unshift(nameValue);
    p1Names(names);
}

function removeLast() {
    event.preventDefault();
    names.pop();
    p1Names(names);
}

function removeFirst() {
    event.preventDefault();
    names.shift();
    p1Names(names);
}

var cars = [{
        id: 1,
        year: 1997,
        make: 'Ford',
        model: 'E350',
        price: 3000
    },
    {
        id: 2,
        year: 1999,
        make: 'Chevy',
        model: 'Venture',
        price: 4900
    },
    {
        id: 3,
        year: 2000,
        make: 'Chevy',
        model: 'Venture',
        price: 5000
    },
    {
        id: 4,
        year: 1996,
        make: 'Jeep',
        model: 'Grand Cherokee',
        price: 4799
    },
    {
        id: 5,
        year: 2005,
        make: 'Volvo',
        model: 'V70',
        price: 44799
    }
];
p2Table(cars);

function p2Table(cars) {
    var carsTable = "<table style ='width:100%'><tr><th>id</th><th>year</th><th>make</th><th>model</th><th>price</th></tr>";
    for (var i = 0; i < cars.length; i++) {
        var tempString = "<tr><td>";
        var tempString2 = tempString.concat(cars[i].id + "</td><td>");
        var tempString3 = tempString2.concat(cars[i].year + "</td><td>");
        var tempString4 = tempString3.concat(cars[i].make + "</td><td>");
        var tempString5 = tempString4.concat(cars[i].model + "</td><td>");
        var tempString6 = tempString5.concat(cars[i].price + "</td></tr>");
        var tempString7 = carsTable.concat(tempString6);
        carsTable = tempString7;
    }
    var tempString = carsTable.concat("</table>");
    document.getElementById("p2").innerHTML = tempString;
}

function filterByPrice() {
    var carsCheap = cars.filter(function (element) {
        return element.price < document.getElementById("price").value;
    })
    p2Table(carsCheap);
}

var calcNumber1;
var calcNumber2;
var calcSign;

function updateDisplay(event) {
    var display = document.getElementById("display").innerHTML;
    var eventVal = (event.target.innerHTML);
    if (eventVal === "=") {
        calcedDisp=calcDisplay(display);
        document.getElementById("display").innerHTML=calcedDisp;
    } else if (eventVal === "+" || eventVal === "*" || eventVal === "/" || eventVal === "-") {
        calcSign = display.length;
        calcNumber1 = Number(display.substring(0, calcSign));
        document.getElementById("display").innerHTML = display + eventVal;
    } else if (Number(eventVal != NaN)) {
        document.getElementById("display").innerHTML = display + eventVal;
    }
}

function calcDisplay(display) {
    calcNumber2 = Number(display.substring(calcSign + 1));
    calcSignVal = display.substring(calcSign, calcSign + 1);
    if (calcSignVal === "-") {
        return calcNumber1 - calcNumber2;
    } else if (calcSignVal === "+") {
        return calcNumber1 + calcNumber2;
    } else if (calcSignVal === "*") {
        return calcNumber1 * calcNumber2;
    } else if (calcSignVal === "/") {
        return calcNumber1 / calcNumber2;
    }
}