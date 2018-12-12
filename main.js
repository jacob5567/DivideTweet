/*
Jacob Faulk
j_faulk@u.pacific.edu
Created on 12/04/2018
*/

window.addEventListener("load", function() {

    var userInput = new Vue({
        el: "#input",
        data: {
            userTweet: ""
        }
    });

    var results = new Vue({
        el: "#results",
        data: {
            dividedTweets: []
        },
        methods: {
            divide: function() {
                let data = userInput.$data.userTweet;
                data = data.replace(/\n/g, ' ');
                let arrayOfTweets = [];
                let i = 0;
                let lastSpace = 0;
                let lastI = 0;
                while(i < data.length) {
                    if(data[i] == ' ') {
                        if(i - lastI <= 270) {
                            lastSpace = i;
                        }
                        else {
                            arrayOfTweets.push(data.substring(lastI, lastSpace));
                            i = lastSpace;
                            lastI = i;
                        }
                    }
                    i++;
                }
                if(i > lastI + 1) {
                    arrayOfTweets.push(data.substring(lastI, data.length));
                }

                for(let j = 0; j < arrayOfTweets.length; j++) {
                    arrayOfTweets[j] += ' (' + (j + 1) + '/' + arrayOfTweets.length + ')';
                }

                this.dividedTweets = arrayOfTweets;
            }
        }
    });

    userInput.$watch("userTweet", function() {
        results.divide()
    });

})