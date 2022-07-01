const quizData = [
    {
        question: 'What is the most used programming language in 2019',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'a',
    },
    {
        question: 'Who is he President of US',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b',
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Javascript Object Notation',
        d: 'Helicopter Terminals Motorboats Lamborginis',
        correct: 'a',
    },
    {
        question: 'What year was Javascript launched?',
        a: '2022',
        b: '2019',
        c: '2018',
        d: 'none of the above',
        correct: 'd',
    },
];
const questionEl = document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const btnSubmit = document.querySelector('.btn-submit');
const answers = document.querySelectorAll('input[type="radio"]');
const questionContent = document.querySelector('.question-content');
const btnBack = document.querySelector('.btn-back');
let currentQiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    const currentQizData = quizData[currentQiz];
    questionEl.innerText = currentQizData.question;
    a_text.innerText = currentQizData.a;
    b_text.innerText = currentQizData.b;
    c_text.innerText = currentQizData.c;
    d_text.innerText = currentQizData.d;
}
function getSelectedQuestion() {
    let answerQuestion = undefined;
    answers.forEach((answer) => {
        if (answer.checked) {
            answerQuestion = answer;
        }
    });
    return answerQuestion;
}
btnSubmit.addEventListener('click', function (e) {
    let answer = getSelectedQuestion();
    console.log(answer);
    if (answer) {
        if (answer.value === quizData[currentQiz].correct) {
            score++;
        }
        currentQiz++;
        answer.checked = false;
        if (currentQiz < quizData.length) {
            loadQuiz();
        } else {
            questionContent.innerHTML = `<h1 style='font-size: 2rem'>You answered <span style="color:red"> ${score}</span> questions correctly!</h1>`;
        }
    }
});
