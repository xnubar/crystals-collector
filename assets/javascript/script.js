$(document).ready(function () {
    class Random {
        static randomNum(min, max) {
            if (typeof min === "number" && typeof max === "number") {
                let randNum = Math.floor(Math.random() * (max - min)) + min;
                return randNum;
            } return "Max and min parameter is NaN";

        }

        static randomArray() {
            //Each crystal should have a random hidden value between 1 - 12.
            let arr = [];
            for (let i = 0; i < 4; i++) {
                let num = this.randomNum(1, 12);
                if (typeof num === "number") {
                    while (arr.indexOf(num) !== -1) {
                        num = this.randomNum(1, 12);
                    }
                    arr.push(num);
                }
            }
            return arr;
        }
    }

    class Crystal {
        constructor() {
            this.audio = new Audio("./assets/musics/addScore.mp3");
            this.reset = false;
        }

        setExpectedScore(div) {
            let num = Random.randomNum(19, 120);
            if (typeof num === "number") {
                $(div).html(num)
            }
        }

        setValueToCrystals(arr) {
            var randsArr = Random.randomArray();
            for (let j = 0; j < arr.length; j++) {
                $(arr[j]).data("data", randsArr[j])
            }
        }
        reStart(expected, userScore, userResult) {
            this.setExpectedScore(expected);
            userScore.html("0");
            $(userResult).hide();
            this.reset = false;
        }
        checkScore(expected, userScore, wins, losses, userResult) {
            if (!this.audio.paused) {
                this.audio.pause();
            }

            let expectedInt = parseInt($(expected).html())
            let userScoreInt = parseInt($(userScore).html())

            if (expectedInt === userScoreInt) {
                this.audio = new Audio("./assets/musics/youWon.mp3")
                wins.html((parseInt(wins.html()) + 1));
                $(userResult).html("You won!!!")
                $(userResult).show();
                this.reset = true;
            } else if (expectedInt < userScoreInt) {
                this.audio = new Audio("./assets/musics/youLost.mp3")
                losses.html((parseInt(losses.html())) + 1)
                $(userResult).html("You lost!!!")
                $(userResult).show();
                this.reset = true;
            } else {
                this.audio = new Audio("./assets/musics/addScore.mp3")
            }
            this.audio.play();

        }

    }

    let expectedResultScore = $(".expected-result-score");
    let wins = $(".wins");
    let losses = $(".losses");
    let userScore = $(".result-score");
    let crystals = $(".crystal-imgs img");
    let userResult = $(".user-result");
    var crystal = new Crystal();
    crystal.setExpectedScore(expectedResultScore);
    crystal.setValueToCrystals(crystals);
    var audio;


    crystals.on("click", function () {
        if (!https://xnubar.github.io/Star-Wars/
            ihttps://xnubar.github.io/Star-Wars/
             https://xnubar.github.io/Star-Wars/is).data("data")));
            }https://xnubar.github.io/Star-Wars/
             https://xnubar.github.io/Star-Wars/
            }https://xnubar.github.io/Star-Wars/
            crystal.checkScore(expectedResultScore, userScore, wins, losses, userResult)
        } else {
            crystal.reStart(expectedResultScore, userScore, userResult)
        }
    })

})