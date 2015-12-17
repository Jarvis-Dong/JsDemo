/**
 * Created by jiawei.dong on 12/4/2015.
 */
var count = -1;  //现在是从-1开始 有没有办法从0开始
var fullScore = 100;
var userScore = 0;
var a ='1.565555555555';
var b ='2.0';
var correctCount = 0;

console.log((a* b).toFixed(2));
//console.log((a).toFixed(2));
console.log(typeof (a*1.0));
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
        question: "1+1 = ?",
        choices: [
            "1",
            "2",
            "3",
            "4"],
        correctAnswer: 1
    },
    {
        question: "Jquery 是否是一种语言",
        choices: [
            "是一种语言",
            "不是"
        ],
        correctAnswer: 1
    },
    {
        question: "请问这个应用作者的生日是几号",
        choices: [
            "9.15",
            "9.16",
            "9.17",
            "9.12"
        ],
        correctAnswer: 3
    },
    {
        question: "那他又是什么星座呢？",
        choices: [
            "天蝎座",
            "处女座",
            "摩羯座",
            "狮子座"
        ],
        correctAnswer: 1
    },
    {
        question: "前端工程师最不可能使用的工具是？",
        choices: [
            "excell",
            "eclipse",
            "webStorm",
            "Mysql"
        ],
        correctAnswer: 3
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
//此方法用来检测用户有没有选择选项
function checkform() {
    if (count >= 0) {
        var radios = $('#radio-container input');
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked == true) {
                return true;
            }
        }
        ;
        console.log("check了");
    }
    else {
        console.log("没check");
        return true;
    }
    ;

};
//计算总成绩方法
function consoleScore() {
    userScore = 0;
    correctCount = 0;

    //遍历之后计算成绩
    for (var i = 0; i < allQuestions.length; i++) {
        if (allQuestions[i].correctAnswer == allQuestions[i].userChoice) {
            correctCount++;
        }
    }
    userScore = (correctCount/allQuestions.length*100).toFixed(2);
};
//在数组中创建userChoice的值
function createUserChoice(){
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
};
//切换页面问题的方法
function change() {
    if (count >= allQuestions.length) {
        var userChoice = 99;
        createUserChoice();
        consoleScore();
        $("#question").html("");
        $("#radio-container").html("<p>您的成绩是：" + userScore + "</p>")
    }

    else {
        var userChoice = 99;
        $("#question").html(allQuestions[count].question);
        var choices = allQuestions[count].choices;
        createUserChoice();
        $("#radio-container").html("");
        for (var i = 0; i < choices.length; i++) {
            var template = "<div class='radio'><label><input class='optionRadios' type='radio' name='optionsRadios' id='optionRadios" + i + "'value='" + i + "'>" + choices[i] + "</label></div>"
            $("#radio-container").append(template);

        }
        ;
        var historyUserChoice = allQuestions[count].userChoice;
        $("input[name='optionsRadios'][value=" + historyUserChoice + "]").attr("checked", true);

    }
    consoleHtml();
}
function last() {
    var userChoice = 99;
    $("#question").html(allQuestions[count].question);
    var choices = allQuestions[count].choices;
    $("#radio-container").html("");
    for (var i = 0; i < choices.length; i++) {
        var template = "<div class='radio'><label><input class='optionRadios' type='radio' name='optionsRadios' id='optionRadios" + i + "'value='" + i + "'>" + choices[i] + "</label></div>"
        $("#radio-container").append(template);

    }
    ;
    var historyUserChoice = allQuestions[count].userChoice;
    $("input[name='optionsRadios'][value=" + historyUserChoice + "]").attr("checked", true);
};
$(function () {
    $("#next").on("click", function () {
            if (checkform()){
                count++;
                change();
            }
        else{
                alert("需要填写");
            }
    });
    $("#last").on("click", function () {
        if (count > 0) {
            count--;
            last();
        } else {
            alert("这已经是第一页了");
        }
    })
});






