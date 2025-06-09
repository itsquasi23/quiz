const questions = [
    {
        q: "Số “5” trong tiếng Anh là gì?",
        o: ["Five", "Fifteen", "Fifty", "Fourth"],
        a: "Five"
    },
    {
        q: "“Thứ ba” trong tiếng Anh là gì?",
        o: ["Three", "Thirty", "Third", "Thirteen"],
        a: "Third"
    },
    {
        q: "Số “12” viết tiếng Anh như thế nào?",
        o: ["Twelfth", "Twelve", "Twentieth", "Twelf"],
        a: "Twelve"
    },
    {
        q: "“Thứ nhất” trong tiếng Anh là?",
        o: ["One", "First", "Oneth", "Once"],
        a: "First"
    },
    {
        q: "Số “100” trong tiếng Anh là?",
        o: ["A hundred", "A thousand", "A million", "A hundredth"],
        a: "A hundred"
    },
    {
        q: "“Thứ hai” trong tiếng Anh là gì?",
        o: ["Second", "Two", "Twice", "Twelfth"],
        a: "Second"
    },
    {
        q: "Số “40” viết tiếng Anh là?",
        o: ["Fourty", "Forty", "Fourteen", "Fortieth"],
        a: "Forty"
    },
    {
        q: "“Thứ mười một” trong tiếng Anh là?",
        o: ["Eleventh", "Eleven", "Elevent", "Eleveth"],
        a: "Eleventh"
    },
    {
        q: "Số “21” viết tiếng Anh đúng là?",
        o: ["Twenty first", "Twenty-one", "Twentieth-one", "Twenteen-one"],
        a: "Twenty-one"
    },
    {
        q: "“Thứ năm” trong tiếng Anh là?",
        o: ["Five", "Fifth", "Fiveth", "Fif"],
        a: "Fifth"
    },
    {
        q: "Số “8” trong tiếng Anh là gì?",
        o: ["Eighth", "Eight", "Eighty", "Eighteen"],
        a: "Eight"
    },
    {
        q: "“Thứ tư” trong tiếng Anh là gì?",
        o: ["Four", "Fourth", "Fourty", "Fourteen"],
        a: "Fourth"
    },
    {
        q: "Số “30” viết tiếng Anh như thế nào?",
        o: ["Thirteen", "Thirty", "Third", "Thirtyth"],
        a: "Thirty"
    },
    {
        q: "“Thứ mười” trong tiếng Anh là?",
        o: ["Ten", "Tenth", "Teneth", "Tenthly"],
        a: "Tenth"
    },
    {
        q: "Thứ Hai trong tiếng Anh là gì?",
        o: ["Monday", "Sunday", "Friday", "Tuesday"],
        a: "Monday"
    },
    {
        q: "Tháng 1 trong tiếng Anh là gì?",
        o: ["January", "June", "July", "November"],
        a: "January"
    },
    {
        q: "Chủ nhật trong tiếng Anh là gì?",
        o: ["Sunday", "Saturday", "Monday", "Thursday"],
        a: "Sunday"
    },
    {
        q: "Tháng 12 trong tiếng Anh là?",
        o: ["December", "October", "November", "August"],
        a: "December"
    },
    {
        q: "Tháng nào đứng sau tháng 3?",
        o: ["April", "May", "June", "February"],
        a: "April"
    },
    {
        q: "Thứ Tư trong tiếng Anh là gì?",
        o: ["Wednesday", "Thursday", "Tuesday", "Friday"],
        a: "Wednesday"
    }
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
        document.getElementById("result").textContent = `🎉 Bạn đã đạt được ${score}/20!`;
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