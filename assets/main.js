/*const questions = [
    { q: "...", o: ["...", "...", "...", "..."], a: "..." }
];*/

const questions = [
    { q: "I want ___ go home now.", o: ["to", "for", "at", "in"], a: "to" },
    { q: "She wants ___ visit Paris someday.", o: ["to", "for", "at", "on"], a: "to" },
    { q: "We want ___ to join the team.", o: ["him", "he", "his", "he's"], a: "him" },
    { q: "They want us ___ stay longer.", o: ["to", "for", "with", "on"], a: "to" },
    { q: "Do you want ___ a movie?", o: ["to watch", "watching", "watched", "watch"], a: "to watch" },
    { q: "He doesn't want ___ late.", o: ["to be", "be", "being", "been"], a: "to be" },
    { q: "What do you want ___ dinner?", o: ["for", "to", "in", "on"], a: "for" },
    { q: "I want you ___ me the truth.", o: ["to tell", "tell", "telling", "tells"], a: "to tell" },
    { q: "We want them ___ early.", o: ["to leave", "leave", "leaving", "left"], a: "to leave" },
    { q: "Does she want him ___?", o: ["to stay", "stay", "stayed", "stays"], a: "to stay" },
    { q: "Nobody wants ___ alone.", o: ["to be", "be", "being", "been"], a: "to be" },
    { q: "He said he didn’t want ___ about it.", o: ["to talk", "talks", "talked", "talking"], a: "to talk" },
    { q: "I want this ___ finished by tonight.", o: ["to be", "is", "be", "was"], a: "to be" },
    { q: "She wants her friends ___ happy.", o: ["to be", "be", "being", "been"], a: "to be" },
    { q: "What do you want me ___?", o: ["to do", "do", "doing", "did"], a: "to do" },
    { q: "We all want ___ successful.", o: ["to be", "being", "be", "been"], a: "to be" },
    { q: "They want their teacher ___ them more time.", o: ["to give", "giving", "give", "gives"], a: "to give" },
    { q: "Why do you want ___ here?", o: ["to stay", "stay", "stayed", "staying"], a: "to stay" },
    { q: "He might want ___ later.", o: ["to leave", "leave", "left", "leaving"], a: "to leave" },
    { q: "She doesn't want anyone ___ about the surprise.", o: ["to know", "know", "knowing", "knew"], a: "to know" }
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