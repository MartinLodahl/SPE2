/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



setInterval(function () {
    
    var time = document.getElementById("time");
    var url = "http://localhost:8084/Ajax/time";
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
        var newTime = JSON.parse(text);
        time.innerHTML = newTime.time;
    });
},1000);