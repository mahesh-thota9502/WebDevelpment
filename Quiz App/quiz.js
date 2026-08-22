 
const loggedIn =
    localStorage.getItem("loggedIn");
if (loggedIn !== "true") {
    window.location.href = "login.html";
}
 
const username =
    localStorage.getItem("username");
document.getElementById("userName").textContent = username;
 
const correctAnswers = {
    q1: "var",
    q2: "push",
    q3: "parse",
    q4: "getElementById",
    q5: "console.log"
};
const quizForm =document.getElementById("quizForm");

const quizError =document.getElementById("quizError");
 
quizForm.addEventListener("submit",

    function(event) {
        event.preventDefault();
        quizError.textContent = "";

        let score = 0;
        let allAnswered = true;
       
        for (
            let question in correctAnswers
        ) {
            const selected = document.querySelector(`input[name="${question}"]:checked`);
            
            if (!selected) {
                allAnswered = false;
                break;
            }
            
            if (
                selected.value ===
                correctAnswers[question]
            ) {
                score++;
            }
        }
        
        if (!allAnswered) {
            quizError.textContent = "Please answer all questions.";
            return;
        }
       
        localStorage.setItem(
            "score",
            score
        );
    
        localStorage.setItem(
            "totalQuestions",
            Object.keys(correctAnswers).length
        );
      
        window.location.href =
            "result.html";
    }
);
 
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