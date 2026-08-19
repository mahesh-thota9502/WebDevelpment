// Check whether user is logged in
const loggedIn =
    localStorage.getItem("loggedIn");
if (loggedIn !== "true") {
    window.location.href =
        "login.html";
}
// Get username
const username =
    localStorage.getItem("username");
document.getElementById("userName")
    .textContent = username;
// Correct answers
const correctAnswers = {
    q1: "var",
    q2: "push",
    q3: "parse",
    q4: "getElementById",
    q5: "console.log"
};
const quizForm =
    document.getElementById("quizForm");
const quizError =
    document.getElementById("quizError");
// Submit exam
quizForm.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
        quizError.textContent = "";
        let score = 0;
        let allAnswered = true;
        // Check questions
        for (
            let question in correctAnswers
        ) {
            const selected =
                document.querySelector(
                    `input[name="${question}"]:checked`
                );
            // Validation
            if (!selected) {
                allAnswered = false;
                break;
            }
            // Check answer
            if (
                selected.value ===
                correctAnswers[question]
            ) {
                score++;
            }
        }
        // If unanswered question exists
        if (!allAnswered) {
            quizError.textContent =
                "Please answer all questions.";
            return;
        }
        // Save score
        localStorage.setItem(
            "score",
            score
        );
        // Save total questions
        localStorage.setItem(
            "totalQuestions",
            Object.keys(correctAnswers).length
        );
        // Go to result page
        window.location.href =
            "result.html";
    }
);
// Logout
document.getElementById("logoutBtn")
    .addEventListener(
        "click",
        function() {
            localStorage.removeItem(
                "loggedIn"
            );
            localStorage.removeItem(
                "username"
            );
            localStorage.removeItem(
                "score"
            );
            window.location.href =
                "index.html";
        }
    );