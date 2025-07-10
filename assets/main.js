const questions = [
    { q: "I ___ a student.", o: ["am", "is", "are", "be"], a: "am" },
    { q: "She ___ my sister.", o: ["is", "am", "are", "was"], a: "is" },
    { q: "They ___ in the classroom.", o: ["is", "are", "am", "be"], a: "are" },
    { q: "We ___ ready.", o: ["is", "are", "am", "be"], a: "are" },
    { q: "He ___ from Vietnam.", o: ["am", "is", "are", "were"], a: "is" },

    { q: "You ___ very nice.", o: ["is", "am", "are", "be"], a: "are" },
    { q: "It ___ a cat.", o: ["are", "is", "am", "be"], a: "is" },
    { q: "I ___ not hungry.", o: ["is", "am", "are", "be"], a: "am" },
    { q: "They ___ not here.", o: ["is", "are", "am", "be"], a: "are" },
    { q: "We ___ not tired.", o: ["am", "is", "are", "be"], a: "are" },

    { q: "___ she your teacher?", o: ["Is", "Are", "Am", "Do"], a: "Is" },
    { q: "___ they your friends?", o: ["Is", "Are", "Am", "Do"], a: "Are" },
    { q: "___ I late?", o: ["Am", "Is", "Are", "Be"], a: "Am" },
    { q: "___ it your dog?", o: ["Is", "Are", "Am", "Was"], a: "Is" },
    { q: "He ___ not at school.", o: ["am", "is", "are", "be"], a: "is" },

    { q: "We ___ students.", o: ["is", "are", "am", "be"], a: "are" },
    { q: "You ___ not my brother.", o: ["is", "am", "are", "be"], a: "are" },
    { q: "I ___ in class now.", o: ["is", "are", "am", "be"], a: "am" },
    { q: "She ___ not happy today.", o: ["is", "am", "are", "was"], a: "is" },
    { q: "___ you okay?", o: ["Are", "Is", "Am", "Do"], a: "Are" }
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
        document.getElementById("result").textContent = `🎉 Bạn đã đạt được ${score}/${questions.length}!`;

        // Tạo dropdown kết quả
        let dropdownHTML = `<details><summary>📋 Xem kết quả chi tiết</summary><ul>`;
        shuffledQuestions.forEach((q, index) => {
            const userChoice = userAnswers[index];
            const correct = userChoice === q.a;
            dropdownHTML += `<li>
                        <strong>${index + 1}. ${q.q}</strong><br>
                        • Bạn chọn: <span class="${correct ? 'correct' : 'wrong'}">${userChoice}</span><br>
                        • Đáp án đúng: <span class="correct">${q.a}</span>
                    </li><br>`;
        });
        dropdownHTML += `</ul></details>`;
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