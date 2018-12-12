/*
Jacob Faulk
j_faulk@u.pacific.edu
Created on 12/04/2018
*/

window.addEventListener("load", function()
{

    var userInput = new Vue({
        el: "#input",
        data: {
            userTweet: ""
        }
    })

    var app1 = new Vue({
        el: '#app-1',
        data: {
            message: 'Hello Vue!'
        }
    })

})
