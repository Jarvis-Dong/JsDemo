/**
 * Created by jiawei.dong on 12/4/2015.
 */
var count = -1;  //现在是从-1开始 有没有办法从0开始
var fullScore = 100;
var userScore = 0;
var allQuestions = [
    {
        question: "Who is Prime Minister of the United Kingdom?",
        choices: [
            "David Cameron",
            "Gordon Brown",
            "Winston Churchill",
            "Tony Blair"],
        correctAnswer: 0
    },
    {
        question: "22222222222222222",
        choices: [
            "David Cameron",
            "Gordon Brown",
            "Tony Blair"],
        correctAnswer: 2
    },
    {
        question: "3333333333333333333?",
        choices: [
            "David Cameron",
            "Gordon Brown",
            "Winston Churchill",
            "Tony Blair"],
        correctAnswer: 0
    }
];

var questionNum = allQuestions.length;
var eachQuestionMark = fullScore / questionNum;
var consoleHtml = function () {
    for (var i = 0; i < allQuestions.length; i++) {
        var template = "<div><span>" + allQuestions[i].question + "</span><span>" + allQuestions[i].correctAnswer + "</span><span>" + allQuestions[i].choices + "</span><span style='color: red'>" + allQuestions[i].userChoice + "</span></div>"
        $("#console").append(template);
    }
};

function change() {
    if (count >= allQuestions.length) {
        var userChoice = 99;
        var radios = $(".optionRadios");
        for (var j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                userChoice = radios[j].value;
                allQuestions[count - 1].userChoice = userChoice;
                if (allQuestions[count - 1].userChoice == allQuestions[count - 1].correctAnswer) {
                    console.log("true");
                }

            }

        }
        ;
        console.log(userScore);
        $("#question").html("");
        $("#radio-container").html("<p>您的成绩是：" + userScore + "</p>")

    }
    else {
        var userChoice = 99;
        $("#question").html(allQuestions[count].question);
        var choices = allQuestions[count].choices;
        var radios = $(".optionRadios");
        for (var j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                userChoice = radios[j].value;
                allQuestions[count - 1].userChoice = userChoice;
                if (allQuestions[count - 1].userChoice == allQuestions[count - 1] //这边的count为什么要-1 点击change 之后应该先做完if语句再走count++啊
                        .correctAnswer) {
                    console.log("true");
                }

            }

        }
        ;
        $("#radio-container").html("");
        for (var i = 0; i < choices.length; i++) {
            var template = "<div class='radio'><label><input class='optionRadios' type='radio' name='optionsRadios' id='optionRadios" + i + "'value='" + i + "'>" + choices[i] + "</label></div>"
            $("#radio-container").append(template);

        };

    }
    consoleHtml();
}
function last() {
    var userChoice = 99;
    $("#question").html(allQuestions[count].question);
    var choices = allQuestions[count].choices;
    var radios = $(".optionRadios");
    for (var j = 0; j < radios.length; j++) {
        if (radios[j].checked) {
            userChoice = radios[j].value;
            allQuestions[count - 1].userChoice = userChoice;
            if (allQuestions[count - 1].userChoice == allQuestions[count - 1] //这边的count为什么要-1 点击change 之后应该先做完if语句再走count++啊
                    .correctAnswer) {
                console.log("true");
            }

        }

    };
    $("#radio-container").html("");
    for (var i = 0; i < choices.length; i++) {
        var template = "<div class='radio'><label><input class='optionRadios' type='radio' name='optionsRadios' id='optionRadios" + i + "'value='" + i + "'>" + choices[i] + "</label></div>"
        $("#radio-container").append(template);

    };
    //$("input[name='optionsRadios'][value=2]").attr("checked",true);
};
$(function () {
    $("#next").on("click", function () {
        count++;
        change();

        console.log(count);
    })
    $("#last").on("click", function () {
        count--;
        last();
        console.log(count);
    })
});





