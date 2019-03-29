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
        checkScore(expected, userScore, wins, losses, userResult) {
            let expectedInt = parseInt($(expected).html())
            let userScoreInt = parseInt($(userScore).html())
            if (expectedInt === userScoreInt) {
                wins.html((parseInt(wins.html()) + 1));
                $(userResult).html("You won!!!")
                $(userResult).show();
            } else if (expectedInt < userScoreInt) {
                losses.html((parseInt(losses.html())) + 1)
                $(userResult).html("You lost!!!")
                $(userResult).show();
            }


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


    crystals.on("click", function () {
        if (userScore.html().length > 0) {
            userScore.html(parseInt(userScore.html()) + parseInt($(this).data("data")));
        } else {
            userScore.html(parseInt($(this).data("data")));
        }
        crystal.checkScore(expectedResultScore, userScore, wins, losses, userResult)
    })

})