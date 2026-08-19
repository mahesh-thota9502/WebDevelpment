const username =
    localStorage.getItem("username");
const score =
    Number(localStorage.getItem("score"));
const total =
    Number(localStorage.getItem("totalQuestions"));
// Display username
document.getElementById("resultName")
    .textContent = username;
// Display score
document.getElementById("score")
    .textContent =
        `${score} / ${total}`;
// Correct answers
document.getElementById("correct")
    .textContent = score;
// Wrong answers
document.getElementById("wrong")
    .textContent =
        total - score;
// Total questions
document.getElementById("total")
    .textContent = total;
// Percentage
const percentage =
    (score / total) * 100;
// Result message
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