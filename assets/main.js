const questions = [
    { q: "Làm sao để nói 'Xin chào' bằng tiếng Anh?", o: ["Hello", "Bye", "Thanks", "Good"], a: "Hello" },
    { q: "Khi gặp ai đó vào buổi sáng, bạn nên nói gì?", o: ["Good night", "Good morning", "Good evening", "Goodbye"], a: "Good morning" },
    { q: "'What’s up?' là câu chào theo cách nào?", o: ["Trang trọng", "Thân mật", "Rất cổ", "Không phù hợp"], a: "Thân mật" },
    { q: "Đâu là câu trả lời phù hợp cho 'How are you?'", o: ["I'm fine, thank you.", "See you later.", "My name is John.", "I'm twenty."], a: "I'm fine, thank you." },
    { q: "'Nice to meet you' nghĩa là gì?", o: ["Tạm biệt", "Rất vui được gặp bạn", "Tôi khỏe", "Chúc ngủ ngon"], a: "Rất vui được gặp bạn" },

    { q: "Câu nào dùng để hỏi tên người khác?", o: ["What is your name?", "How old are you?", "Where are you from?", "How are you?"], a: "What is your name?" },
    { q: "Câu nào dùng để hỏi tuổi?", o: ["How old are you?", "What’s your name?", "Where do you live?", "Are you okay?"], a: "How old are you?" },
    { q: "Nếu ai đó hỏi 'What’s your name?', bạn nên trả lời thế nào?", o: ["I’m John.", "I’m fine.", "I’m 20.", "I’m from Hanoi."], a: "I’m John." },
    { q: "Đâu là câu hỏi lịch sự khi hỏi tên?", o: ["May I know your name?", "How old are you?", "What time is it?", "Are you happy?"], a: "May I know your name?" },
    { q: "Câu nào KHÔNG phải là chào hỏi?", o: ["Goodbye", "Hello", "Hi", "How much?"], a: "How much?" },

    { q: "Câu nào có nghĩa là 'Chào buổi tối'?", o: ["Good evening", "Good night", "Good morning", "See you"], a: "Good evening" },
    { q: "Khi ai đó nói 'Goodbye', bạn có thể đáp lại thế nào?", o: ["Goodbye!", "Nice to meet you!", "I’m fine!", "What’s up?"], a: "Goodbye!" },
    { q: "Câu 'See you later!' nghĩa là gì?", o: ["Tạm biệt và hẹn gặp lại", "Chúc ngủ ngon", "Bạn khỏe không?", "Tôi tên là Lan"], a: "Tạm biệt và hẹn gặp lại" },
    { q: "Câu hỏi nào lịch sự hơn khi hỏi tuổi?", o: ["May I ask how old you are?", "How old are you?", "Tell me your age", "How are you?"], a: "May I ask how old you are?" },
    { q: "Nếu bạn muốn hỏi sinh nhật, nên dùng câu nào?", o: ["When is your birthday?", "How old are you?", "What time is it?", "What is your address?"], a: "When is your birthday?" },

    { q: "'How are you doing?' có nghĩa giống với câu nào sau đây?", o: ["How are you?", "What’s your name?", "How old are you?", "Where are you?"], a: "How are you?" },
    { q: "Nếu ai đó nói 'Long time no see!', bạn sẽ hiểu là gì?", o: ["Lâu rồi không gặp", "Tạm biệt nhé", "Xin lỗi", "Chúc ngủ ngon"], a: "Lâu rồi không gặp" },
    { q: "Câu nào sau đây không phù hợp để chào hỏi?", o: ["What's your age?", "Hello", "Hi", "Good morning"], a: "What's your age?" },
    { q: "Nếu bạn nghe 'How's it going?', bạn nên phản hồi như thế nào?", o: ["Pretty good!", "My name is Hoa.", "I'm 15.", "At 6 o'clock."], a: "Pretty good!" },
    { q: "'How do you spell your name?' nghĩa là gì?", o: ["Bạn đánh vần tên như thế nào?", "Bạn tên gì?", "Bạn bao nhiêu tuổi?", "Bạn sống ở đâu?"], a: "Bạn đánh vần tên như thế nào?" }
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