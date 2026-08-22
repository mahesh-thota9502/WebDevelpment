const username =
    localStorage.getItem("username");
const score =
    Number(localStorage.getItem("score"));
const total =
    Number(localStorage.getItem("totalQuestions"));
 
document.getElementById("resultName")
    .textContent = username;
 
document.getElementById("score")
    .textContent =
        `${score} / ${total}`;
 
document.getElementById("correct")
    .textContent = score;
 
document.getElementById("wrong")
    .textContent =
        total - score;
 
document.getElementById("total")
    .textContent = total;
 
const percentage =
    (score / total) * 100;
 
const resultMessage =
    document.getElementById("resultMessage");
if (percentage >= 80) {
    resultMessage.textContent =
        "Excellent Performance!";
}
else if (percentage >= 60) {
    resultMessage.textContent =
        "Good Job!";
}
else if (percentage >= 40) {
    resultMessage.textContent =
        "Keep Practicing!";
}
else {
    resultMessage.textContent =
        "You Need More Practice.";
}