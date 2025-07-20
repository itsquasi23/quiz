/*const questions = [
    { q: "...", o: ["...", "...", "...", "..."], a: "..." }
];*/

const questions = [
    { q: "___ is your name?", o: ["What", "Where", "Why", "Who"], a: "What" },
    { q: "___ do you live?", o: ["What", "Where", "Why", "When"], a: "Where" },
    { q: "___ is knocking at the door?", o: ["Who", "What", "When", "Where"], a: "Who" },
    { q: "___ are you late?", o: ["Why", "Where", "What", "Which"], a: "Why" },
    { q: "___ is your favorite subject?", o: ["What", "Which", "Who", "Whose"], a: "What" },
    { q: "___ do you go to school?", o: ["When", "Where", "Why", "What"], a: "When" },
    { q: "___ one do you prefer, tea or coffee?", o: ["Which", "What", "Who", "Whose"], a: "Which" },
    { q: "___ are you doing?", o: ["What", "Where", "Why", "When"], a: "What" },
    { q: "___ old are you?", o: ["How", "What", "Which", "Why"], a: "How" },
    { q: "___ does this machine work?", o: ["How", "What", "Why", "When"], a: "How" },
    { q: "___ do you like best, apples or oranges?", o: ["Which", "What", "Who", "Whose"], a: "Which" },
    { q: "___ does she come from?", o: ["Where", "Why", "Who", "What"], a: "Where" },
    { q: "___ do you study every day?", o: ["What", "Where", "When", "Who"], a: "What" },
    { q: "___ is she crying?", o: ["Why", "When", "Who", "What"], a: "Why" },
    { q: "___ do you go to bed?", o: ["When", "Where", "Why", "How"], a: "When" },
    { q: "___ are you talking to?", o: ["Who", "When", "What", "Whose"], a: "Who" },
    { q: "___ is your birthday?", o: ["When", "Where", "Who", "What"], a: "When" },
    { q: "___ can I help you?", o: ["How", "What", "Why", "Where"], a: "How" },
    { q: "___ is your favorite color?", o: ["What", "Which", "Who", "Why"], a: "What" },
    { q: "___ do you eat for breakfast?", o: ["What", "When", "Why", "How"], a: "What" },
    { q: "___ do you usually wake up?", o: ["When", "How", "Why", "Who"], a: "When" },
    { q: "___ did you meet at the party?", o: ["Who", "What", "Whose", "Which"], a: "Who" },
    { q: "___ of these pens do you prefer, the black pen, the white pen or the blue pen?", o: ["Which", "What", "Whose", "How"], a: "Which" },
    { q: "___ umbrella is this on the table?", o: ["Whose", "Who", "Which", "What"], a: "Whose" },
    { q: "___ kind of movies do you like?", o: ["What", "What kind", "Which", "How"], a: "What" },
    { q: "___ is he doing?", o: ["Which", "Who", "Whose", "What"], a: "What" },
    { q: "___ many brothers do you have?", o: ["How", "How much", "What", "Which"], a: "How" },
    { q: "___ much money do you need?", o: ["How", "How many", "What", "Which"], a: "How" },
    { q: "___ did you invite to your birthday?", o: ["Why", "Who", "Whose", "Which"], a: "Who" },
    { q: "___ phone is ringing?", o: ["Whose", "Which", "What", "Who"], a: "Whose" }
];

let shuffledQuestions;
let current = 0;
let score = 0;
let userAnswers = [];

function startQuiz() {
    shuffledQuestions = questions.map(q => ({ ...q })).sort(() => Math.random() - 0.5);
    current = 0;
    score = 0;
    userAnswers = [];
    document.getElementById("start").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").textContent = '';
    document.getElementById("dropdown").innerHTML = '';
    showQuestion();
}

function showQuestion() {
    const box = document.getElementById("quiz");

    if (current >= shuffledQuestions.length) {
        box.style.display = "none";
        document.getElementById("result").textContent = `🎉 You scored ${score}/${questions.length}!`;

        // Tạo dropdown kết quả
        let dropdownHTML = `<details><summary>📋 See result: </summary>`;
        shuffledQuestions.forEach((q, index) => {
            const userChoice = userAnswers[index];
            const correct = userChoice === q.a;
            dropdownHTML += `
                        <div class="box">
                        <p>${index + 1}. ${q.q}</p>
                        You chose: <span class="${correct ? 'correct' : 'wrong'}">${userChoice}</span><br>
                        Correct answer: <span class="correct">${q.a}</span>
                        </div>
                    `;
        });
        dropdownHTML += `</details>`;
        document.getElementById("dropdown").innerHTML = dropdownHTML;
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
    userAnswers.push(choice);
    if (choice === shuffledQuestions[current].a) score++;
    current++;
    showQuestion();
}