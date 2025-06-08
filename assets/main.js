const questions = [
    { q: 'What is the English word for the number "15"?', o: ['Fifty', 'Fifteen', 'Five'], a: 'Fifteen' },
    { q: 'What is the ordinal number of "3"?', o: ['Third', 'Three', 'Thirty'], a: 'Third' },
    { q: 'Which day comes after Tuesday?', o: ['Monday', 'Wednesday', 'Sunday'], a: 'Wednesday' },
    { q: 'What month comes before August?', o: ['July', 'June', 'September'], a: 'July' },
    { q: 'How do you say "21st" in English?', o: ['Twenty-one', 'Twenty-oneth', 'Twenty-first'], a: 'Twenty-first' },
    { q: 'What is the English word for the number "40"?', o: ['Fourty', 'Forty', 'Four'], a: 'Forty' },
    { q: 'What is the ordinal number of "10"?', o: ['Tenth', 'Ten', 'Tenty'], a: 'Tenth' },
    { q: 'Which day is the first day of the week?', o: ['Sunday', 'Monday', 'Saturday'], a: 'Sunday' },
    { q: 'What month comes after February?', o: ['March', 'April', 'May'], a: 'March' },
    { q: 'How do you say "5th" in English?', o: ['Fiveth', 'Fifth', 'Five'], a: 'Fifth' },
    { q: 'What is the English word for the number "100"?', o: ['Hundred', 'One hundred', 'Hundreth'], a: 'One hundred' },
    { q: 'What is the ordinal number of "12"?', o: ['Twelfth', 'Twelveth', 'Twelve'], a: 'Twelfth' },
    { q: 'Which month is the 12th of the year?', o: ['November', 'December', 'October'], a: 'December' },
    { q: 'What is the English word for "0"?', o: ['Zero', 'Null', 'Nothing'], a: 'Zero' },
    { q: 'How do you say "2nd" in English?', o: ['Second', 'Two', 'Twoth'], a: 'Second' },
    { q: 'Which day comes before Friday?', o: ['Wednesday', 'Thursday', 'Saturday'], a: 'Thursday' },
    { q: 'What month comes before January?', o: ['December', 'November', 'February'], a: 'December' },
    { q: 'How do you say "13th" in English?', o: ['Thirteenth', 'Thirteen', 'Threeteenth'], a: 'Thirteenth' },
    { q: 'What is the English word for the number "90"?', o: ['Ninety', 'Ninty', 'Nine-ty'], a: 'Ninety' },
    { q: 'Which day is between Monday and Wednesday?', o: ['Sunday', 'Tuesday', 'Thursday'], a: 'Tuesday' }
];

let shuffledQuestions;
let current = 0;
let score = 0;

function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    current = 0;
    score = 0;
    document.getElementById("startPage").style.display = "none";
    document.getElementById("quizBox").style.display = "block";
    document.getElementById("result").textContent = '';
    showQuestion();
}

function showQuestion() {
    const box = document.getElementById("quizBox");

    if (current >= shuffledQuestions.length) {
        box.style.display = "none";
        document.getElementById("result").textContent = `🎉 You scored ${score}/20!`;
        return;
    }

    const q = shuffledQuestions[current];
    const options = [...q.o].sort(() => Math.random() - 0.5);

    let html = `<div class="question">${current + 1}. ${q.q}</div><div class="options">`;
    options.forEach(opt => {
        html += `<button onclick="selectAnswer('${opt}')">${opt}</button>`;
    });
    html += `</div>`;
    box.innerHTML = html;
}

function selectAnswer(choice) {
    if (choice === shuffledQuestions[current].a) score++;
    current++;
    showQuestion();
}