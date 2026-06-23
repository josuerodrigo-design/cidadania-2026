// Aguarda o carregamento do DOM para evitar erros de execução no console
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. CONTROLE DO MODO ESCURO (Acessibilidade) ---
    const darkModeBtn = document.getElementById("toggle-dark-mode");
    
    darkModeBtn.addEventListener("click", () => {
        // Alterna a classe dark-mode no elemento body
        document.body.classList.toggle("dark-mode");
        
        // Atualiza visualmente o texto do botão de forma dinâmica
        if (document.body.classList.contains("dark-mode")) {
            darkModeBtn.textContent = "☀️ Modo Claro";
        } else {
            darkModeBtn.textContent = "¼ Modo Escuro";
        }
    });

    // --- 2. VALIDADOR DO QUIZ ANTI-DESINFORMAÇÃO ---
    const quizForm = document.getElementById("quiz-form");
    const feedbackBox = document.getElementById("quiz-feedback");

    quizForm.addEventListener("submit", (event) => {
        // Impede o recarregamento automático da página
        event.preventDefault();
        
        // Captura a opção selecionada pelo usuário
        const selectedOption = quizForm.elements["quiz-answer"].value;
        
        // Variáveis de mensagens e controle de resposta
        let feedbackMessage = "";
        let feedbackClass = "";

        // Processamento lógico da resposta
        if (selectedOption === "verdadeiro") {
            feedbackMessage = "Parabéns! Resposta Correta. Analisar falhas em rostos e piscadas ajuda a expor vídeos adulterados.";
            feedbackClass = "correct";
        } else {
            feedbackMessage = "Atenção: Resposta incorreta. Apesar do avanço das IAs, falhas biológicas sutis ainda ocorrem e ajudam na identificação.";
            feedbackClass = "correct"; // Mantém a classe visual para exibição uniforme
        }

        // Atualização e exibição dinâmica dos elementos do DOM
        feedbackBox.textContent = feedbackMessage;
        feedbackBox.className = `feedback-box ${feedbackClass}`;
    });
});
