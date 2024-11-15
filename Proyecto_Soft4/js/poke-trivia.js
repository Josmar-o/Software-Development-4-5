//Crear constantes con los elementos de la pagina
const questionEl = document.getElementById('question');
const userAnswerEl = document.getElementById('user-answer');
const feedbackEl = document.getElementById('feedback'); // La respuesta que da el script
const getQuestionBtn = document.getElementById('get-question');
const checkAnswerBtn = document.getElementById('check-answer');

// Preguntas de trivia en español
const triviaQuestions = [
    { question: "¿Cuál es el tipo de Pokémon de Pikachu?", answer: "Eléctrico"  },
    { question: "¿Cuántos tipos de Pokémon existen?", answer: "18 tipos" },
    { question: "¿Cuál es el Pokémon legendario de la primera generación?", answer: "Mewtwo" },
    { question: "¿Qué Pokémon puede evolucionar a Raichu?", answer: "Pikachu" },
    { question: "¿Cuál es el nombre del rival de Ash en la serie original?", answer: "Gary" },
    { question: "¿Qué objeto se utiliza para evolucionar a Eevee en Vaporeon?", answer: "Piedra Agua" },
    { question: "¿Cuál es el Pokémon inicial de tipo Planta en la primera generación?", answer: "Bulbasaur" },
    { question: "¿Quién es el líder del Equipo Rocket?", answer: "Giovanni" }
];

// Funcion para seleccionar una pregunta aleatoria
function fetchTrivia() {
    const randomIndex = Math.floor(Math.random() * triviaQuestions.length);
    const trivia = triviaQuestions[randomIndex];

    // Mostrar pregunta y resetear feedback
    questionEl.textContent = trivia.question;
    userAnswerEl.value = ''; // Resetear el campo de respuesta
    feedbackEl.classList.add('hidden');
    checkAnswerBtn.classList.remove('hidden');
    checkAnswerBtn.onclick = () => checkAnswer(trivia.answer);
}

// Funcion para verificar la respuesta del usuario
function checkAnswer(correctAnswer) {
    const userAnswer = userAnswerEl.value.trim(); // Trim para quitar espacios

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackEl.textContent = "¡Respuesta Correcta!";
        feedbackEl.classList.remove('incorrect');
        feedbackEl.classList.add('correct');
    } else {
        feedbackEl.textContent = "Respuesta Incorrecta. Intenta de nuevo.";
        feedbackEl.classList.remove('correct');
        feedbackEl.classList.add('incorrect');
    }

    feedbackEl.classList.remove('hidden');
}

// Asignar eventos a los botones
getQuestionBtn.addEventListener('click', fetchTrivia);

document.addEventListener('DOMContentLoaded', fetchTrivia); // Cargar una pregunta al abrir la página
