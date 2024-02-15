const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Rome', 'Berlin'],
        answer: 'Paris'
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4'
    },
    // Add more questions here
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = '';

    currentQuizData.options.forEach(option => {
        const optionElement = document.createElement('label');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        optionElement.setAttribute('for', option);
        optionElement.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(optionElement);

        const inputElement = document.createElement('input');
        inputElement.type = 'radio';
        inputElement.id = option;
        inputElement.name = 'option';
        inputElement.value = option;
        optionsElement.appendChild(inputElement);
    });
}

function selectOption(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
        score++;
    }
}

submitButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    resultElement.textContent = `You scored ${score} out of ${quizData.length} questions.`;
}
