const questions = [
    // Phần 1: Chuyển sang dạng câu hỏi Yes/No từ câu trần thuật
    { q: "Are you a student?", o: ["Yes, I am.", "No, I am not.", "Yes, I is.", "No, I are."], a: "Yes, I am." },
    { q: "Is she your sister?", o: ["Yes, she is.", "No, she am not.", "Yes, she are.", "No, she isn't."], a: "Yes, she is." },
    { q: "Are they in the classroom?", o: ["Yes, they are.", "No, they is not.", "Yes, they am.", "No, they be not."], a: "Yes, they are." },
    { q: "Are we ready?", o: ["Yes, we are.", "No, we am.", "Yes, we is.", "No, we be."], a: "Yes, we are." },
    { q: "Is he from Vietnam?", o: ["Yes, he is.", "No, he are not.", "Yes, he am.", "No, he be."], a: "Yes, he is." },
    { q: "Are you very nice?", o: ["Yes, I am.", "No, I is.", "Yes, you are.", "No, you am."], a: "Yes, you are." },
    { q: "Is it a cat?", o: ["Yes, it is.", "No, it are.", "Yes, it am.", "No, it is not."], a: "Yes, it is." },
    { q: "Are you hungry?", o: ["No, I am not.", "Yes, I is.", "No, I are.", "Yes, I be not."], a: "No, I am not." },
    { q: "Are they here?", o: ["No, they are not.", "Yes, they is.", "Yes, they am.", "No, they be."], a: "No, they are not." },
    { q: "Are we tired?", o: ["No, we are not.", "Yes, we is.", "No, we am.", "Yes, we be not."], a: "No, we are not." },

    // Phần 2: Các câu hỏi Yes/No truyền thống
    { q: "Is she your teacher?", o: ["Yes, she is.", "No, she are.", "Yes, she am.", "No, she not."], a: "Yes, she is." },
    { q: "Are they your friends?", o: ["Yes, they are.", "No, they is.", "Yes, they am.", "No, they be not."], a: "Yes, they are." },
    { q: "Am I late?", o: ["Yes, you are.", "No, I am not.", "Yes, I is.", "No, you am."], a: "Yes, you are." },
    { q: "Is it your dog?", o: ["Yes, it is.", "No, it are.", "Yes, it am.", "No, it not."], a: "Yes, it is." },
    { q: "Are you okay?", o: ["Yes, I am.", "No, you are not.", "Yes, you is.", "No, I are."], a: "Yes, I am." },
    { q: "Is he at school?", o: ["Yes, he is.", "No, he are.", "Yes, he am.", "No, he not."], a: "Yes, he is." },
    { q: "Are we students?", o: ["Yes, we are.", "No, we is.", "Yes, we am.", "No, we be."], a: "Yes, we are." },
    { q: "Are you my brother?", o: ["No, I am not.", "Yes, you is.", "No, I are.", "Yes, I be."], a: "No, I am not." },
    { q: "Am I in class now?", o: ["Yes, you are.", "No, I is.", "Yes, I be.", "No, you not."], a: "Yes, you are." },
    { q: "Is she happy today?", o: ["Yes, she is.", "No, she am.", "Yes, she are.", "No, she be."], a: "Yes, she is." }
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
            dropdownHTML += `<li>
                        <strong>${index + 1}. ${q.q}</strong><br>
                        • You chose: <span class="${correct ? 'correct' : 'wrong'}">${userChoice}</span><br>
                        • Correct answer: <span class="correct">${q.a}</span>
                    </li><br>`;
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