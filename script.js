document.addEventListener("DOMContentLoaded", () => {
    const darkModeBtn = document.getElementById("toggle-dark-mode");
    const quizForm = document.getElementById("quiz-form");
    const feedbackBox = document.getElementById("quiz-feedback");

    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Modo Claro" : "🌓 Modo Escuro";
    });

    quizForm.addEventListener("submit", (e) => {
        e.preventDefault();
        feedbackBox.textContent = quizForm.elements["quiz-answer"].value === "verdadeiro" ? "Acertou!" : "Errou!";
        feedbackBox.classList.remove("hidden");
    });
});
