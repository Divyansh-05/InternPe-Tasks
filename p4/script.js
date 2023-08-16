const quizData = [
    {
        question: "Which car company has a logo with four interlocked rings?",
        options: ["Audi", "BMW", "Mercedes", "Toyota"],
        correctAnswer: 0
    },
    {
        question: "Which car is often referred to as the 'Pony Car'?",
        options: ["Ford Mustang", "Chevrolet Camaro", "Dodge Challenger", "Plymouth Barracuda"],
        correctAnswer: 0
    },
    {
        question: "Which Italian manufacturer is known for its supercars like Aventador and Huracán?",
        options: ["Ferrari", "Maserati", "Lamborghini", "Alfa Romeo"],
        correctAnswer: 2
    },
    {
        question: "What is the fastest production car as of 2023?",
        options: ["Bugatti Chiron", "Koenigsegg Jesko", "Hennessey Venom F5", "SSC Tuatara"],
        correctAnswer: 3
    },
    {
        question: "Which car brand originates from Sweden and is known for its safety features?",
        options: ["Volvo", "Saab", "Scania", "Koenigsegg"],
        correctAnswer: 0
    },
    {
        question: "The Porsche 911 is known for having its engine located where?",
        options: ["Front", "Middle", "Rear", "Top"],
        correctAnswer: 2
    },
    {
        question: "Which electric car manufacturer is named after an inventor and electrical engineer?",
        options: ["Nikola", "Edison", "Tesla", "Faraday"],
        correctAnswer: 2
    },
    {
        question: "Which car company produces the model 'Civic' and 'Accord'?",
        options: ["Toyota", "Honda", "Hyundai", "Mazda"],
        correctAnswer: 1
    },
    {
        question: "The Chevrolet Corvette has what kind of layout?",
        options: ["Front-engine, front-wheel drive", "Rear-engine, rear-wheel drive", "Front-engine, rear-wheel drive", "Mid-engine, rear-wheel drive"],
        correctAnswer: 3
    },
    {
        question: "What Italian sports car manufacturer produces the 488 and 812 models?",
        options: ["Lamborghini", "Ferrari", "Maserati", "Alfa Romeo"],
        correctAnswer: 1
    }
];

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.innerText = currentQuiz.question;
    
    optionsContainer.innerHTML = "";
    currentQuiz.options.forEach((option, index) => {
        const optionElement = document.createElement("button");
        optionElement.innerText = option;
        optionElement.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuiz = quizData[currentQuestion];
    if (selectedIndex === currentQuiz.correctAnswer) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.innerText = `You scored ${score} out of ${quizData.length} questions.`;
    optionsContainer.innerHTML = "";
    submitButton.style.display = "none";
}

loadQuestion();
