/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var allUsers = document.getElementById("allUsers");

allUsers.onclick = function () {
    var users = document.getElementById("users");
    var url = "http://localhost:8084/Ajax/Persons";
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
        users.innerHTML = "";
        var allUsers = JSON.parse(text);
        for (var i = 0; i < allUsers.length; i++) {
            users.innerHTML += " Age: " + allUsers[i].age + " Name: " + allUsers[i].name + "";
        }
    });
};

var userAdd = document.getElementById("userAdd");
userAdd.onclick = function () {
    var user = {
        age: document.getElementById("age").value,
        name: document.getElementById("name").value
    };
    var data = (JSON.stringify(user));
    var url = "http://localhost:8084/Ajax/Persons";
    var conf = {method: 'post',
        body: data};
    fetch(url, conf);
    };