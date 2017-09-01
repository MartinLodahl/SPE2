/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var newJoke = document.getElementById("newJoke");
newJoke.onclick = function () {
    
    var joke = document.getElementById("joke");
    joke.innerHTML = "baisda";
    var url = "http://localhost:8084/Ajax/randomQuotes";
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
        var newJoke = JSON.parse(text);
        joke.innerHTML = newJoke.joke;
    });
};

setInterval(function () {
    
    var joke = document.getElementById("joke");
    joke.innerHTML = "baisda";
    var url = "https://jokes-plaul.rhcloud.com/api/joke";
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
        var newJoke = JSON.parse(text);
        joke.innerHTML = newJoke.joke;
    });
}, 3600000);


