const questions = [
    { q: "Chọn từ có nghĩa với từ sau: 'cái ghế'", o: ["chair", "bed", "lamp", "fan"], a: "chair" },
    { q: "Chọn từ có nghĩa với từ sau: 'cái bàn'", o: ["table", "mirror", "pillow", "fan"], a: "table" },
    { q: "Chọn từ có nghĩa với từ sau: 'cái giường'", o: ["bed", "chair", "sofa", "lamp"], a: "bed" },
    { q: "Chọn từ có nghĩa với từ sau: 'cái đèn'", o: ["lamp", "desk", "fan", "bed"], a: "lamp" },
    { q: "Chọn từ có nghĩa với từ sau: 'cái quạt'", o: ["fan", "chair", "table", "pillow"], a: "fan" },
    { q: "Chọn từ có nghĩa với từ sau: 'cái gối'", o: ["pillow", "sofa", "mirror", "bed"], a: "pillow" },
    { q: "Chọn từ có nghĩa với từ sau: 'cái chăn'", o: ["blanket", "pillow", "lamp", "desk"], a: "blanket" },
    { q: "Chọn từ có nghĩa với từ sau: 'cái tủ lạnh'", o: ["fridge", "fan", "table", "chair"], a: "fridge" },
    { q: "Chọn từ có nghĩa với từ sau: 'cái gương'", o: ["mirror", "desk", "lamp", "bed"], a: "mirror" },
    { q: "Chọn từ có nghĩa với từ sau: 'ghế dài / sofa'", o: ["sofa", "bed", "fan", "pillow"], a: "sofa" },
    { q: "Chọn từ có nghĩa với từ sau: 'cái tủ'", o: ["cupboard", "mirror", "lamp", "fan"], a: "cupboard" },
    { q: "Chọn từ có nghĩa với từ sau: 'bàn học'", o: ["desk", "chair", "mirror", "pillow"], a: "desk" },
    { q: "Chọn từ có nghĩa với từ sau: 'cái thảm'", o: ["carpet", "fan", "lamp", "mirror"], a: "carpet" },
    { q: "Chọn từ có nghĩa với từ sau: 'máy giặt'", o: ["washing machine", "fridge", "sofa", "lamp"], a: "washing machine" },
    { q: "Chọn từ có nghĩa với từ sau: 'bếp nấu'", o: ["stove", "lamp", "chair", "blanket"], a: "stove" },
    { q: "Chọn từ có nghĩa với từ sau: 'chén / bát'", o: ["bowl", "bed", "table", "desk"], a: "bowl" },
    { q: "Chọn từ có nghĩa với từ sau: 'cái đĩa'", o: ["plate", "fan", "chair", "lamp"], a: "plate" },
    { q: "Chọn từ có nghĩa với từ sau: 'cái ly'", o: ["glass", "mirror", "desk", "pillow"], a: "glass" },
    { q: "Chọn từ có nghĩa với từ sau: 'muỗng / thìa'", o: ["spoon", "fork", "lamp", "cupboard"], a: "spoon" },
    { q: "Chọn từ có nghĩa với từ sau: 'dao'", o: ["knife", "mirror", "bowl", "bed"], a: "knife" }
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