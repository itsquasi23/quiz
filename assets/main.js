/*const questions = [
    { q: "...", o: ["...", "...", "...", "..."], a: "..." },
];*/

const questions = [
  { q: "I like ___ books before bed.", o: ["reading", "to reading", "read"], a: "reading" },
  { q: "She likes ___ tea in the morning.", o: ["to drink", "drinking", "to drinking"], a: "to drink" },
  { q: "They like ___ pizza on Fridays.", o: ["eating", "eat", "to eating"], a: "eating" },
  { q: "He likes ___ early.", o: ["get up", "getting up", "to getting up"], a: "getting up" },
  { q: "We like ___ after dinner.", o: ["to walk", "walk", "walking"], a: "to walk" },
  { q: "My mom likes ___ the house clean.", o: ["keep", "keeping", "to keeping"], a: "keeping" },
  { q: "I like ___ to music when I study.", o: ["listen", "to listen", "listening to"], a: "to listen" },
  { q: "She likes her coffee ___.", o: ["hot", "hotly", "heat"], a: "hot" },
  { q: "We like our room ___ near the garden.", o: ["located", "locating", "to locate"], a: "located" },
  { q: "He doesn’t like ___ in public.", o: ["speaking", "speak", "to speaking"], a: "speaking" },
  { q: "Do you like ___ pictures of nature?", o: ["taking", "take", "to taking"], a: "taking" },
  { q: "She likes her students to be ___.", o: ["attentive", "attentively", "attention"], a: "attentive" },
  { q: "I like people who are ___.", o: ["helpfully", "helpful", "helping"], a: "helpful" },
  { q: "They like ___ their homework early.", o: ["doing", "do", "to doing"], a: "doing" },
  { q: "We like ___ with friends on weekends.", o: ["to hang out", "hanging out", "to hanging out"], a: "to hang out" },
  { q: "He likes his room to be ___.", o: ["clean", "cleanly", "cleaning"], a: "clean" },
  { q: "I don’t like ___ too much noise.", o: ["make", "making", "to making"], a: "making" },
  { q: "She likes ___ her friends gifts.", o: ["giving", "to giving", "give"], a: "giving" },
  { q: "They like ___ stories around the fire.", o: ["to tell", "telling", "tell"], a: "to tell" },
  { q: "We like ___ with our family.", o: ["spending time", "spend time", "to spending time"], a: "spending time" },
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