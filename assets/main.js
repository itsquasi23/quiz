/*const questions = [
    { q: "...", o: ["...", "...", "...", "..."], a: "..." }
];*/

const questions = [
    {
        q: "This is a place where people go when they are sick or injured. (Đây là nơi người ta đến khi bị ốm hoặc bị thương.)",
        o: ["Library", "Hospital", "School", "Museum"],
        a: "Hospital"
    },
    {
        q: "You can borrow books and read quietly in this place. (Bạn có thể mượn sách và đọc yên tĩnh ở nơi này.)",
        o: ["Bank", "Supermarket", "Library", "Theater"],
        a: "Library"
    },
    {
        q: "This is where you buy food, drinks, and other household items. (Đây là nơi bạn mua thực phẩm, đồ uống và các vật dụng gia đình khác.)",
        o: ["Supermarket", "Pharmacy", "Zoo", "School"],
        a: "Supermarket"
    },
    {
        q: "A place where you watch movies on a big screen. (Nơi bạn xem phim trên màn hình lớn.)",
        o: ["Cinema", "Stadium", "Mall", "Café"],
        a: "Cinema"
    },
    {
        q: "This is where you can catch a plane to another city or country. (Đây là nơi bạn bắt máy bay đến thành phố hoặc quốc gia khác.)",
        o: ["Train station", "Harbor", "Bus stop", "Airport"],
        a: "Airport"
    },
    {
        q: "You go here to learn from teachers and study with classmates. (Bạn đến đây để học từ giáo viên và học cùng bạn bè.)",
        o: ["Office", "Factory", "School", "Gym"],
        a: "School"
    },
    {
        q: "This place is used for playing and watching sports. (Nơi này dùng để chơi và xem thể thao.)",
        o: ["Library", "Stadium", "Theater", "Hospital"],
        a: "Stadium"
    },
    {
        q: "A place where you can see paintings, sculptures, and other artworks. (Nơi bạn có thể xem tranh, tượng và các tác phẩm nghệ thuật khác.)",
        o: ["Museum", "Restaurant", "School", "Post office"],
        a: "Museum"
    },
    {
        q: "People go here to eat food prepared by chefs. (Người ta đến đây để ăn món ăn do đầu bếp chuẩn bị.)",
        o: ["Bakery", "Restaurant", "School", "Market"],
        a: "Restaurant"
    },
    {
        q: "A place where you can send letters and parcels. (Nơi bạn có thể gửi thư và bưu kiện.)",
        o: ["Police station", "Mall", "Post office", "Hotel"],
        a: "Post office"
    },
    {
        q: "You go here when you want to report a crime or need help from the police. (Bạn đến đây khi muốn báo cáo tội phạm hoặc cần sự giúp đỡ từ cảnh sát.)",
        o: ["Police station", "Fire station", "Bank", "Stadium"],
        a: "Police station"
    },
    {
        q: "A small store where you can buy medicines. (Một cửa hàng nhỏ nơi bạn có thể mua thuốc.)",
        o: ["Bakery", "Pharmacy", "Supermarket", "Library"],
        a: "Pharmacy"
    },
    {
        q: "This is a place where you sleep when traveling. (Đây là nơi bạn ngủ khi đi du lịch.)",
        o: ["Restaurant", "Hostel", "Hotel", "Airport"],
        a: "Hotel"
    },
    {
        q: "People buy bread, cakes, and pastries here. (Người ta mua bánh mì, bánh ngọt và bánh nướng ở đây.)",
        o: ["Restaurant", "Bakery", "Butcher", "Library"],
        a: "Bakery"
    },
    {
        q: "This is a place to withdraw or deposit money. (Đây là nơi rút hoặc gửi tiền.)",
        o: ["Mall", "Bank", "Library", "School"],
        a: "Bank"
    },
    {
        q: "You can buy meat and sausages here. (Bạn có thể mua thịt và xúc xích ở đây.)",
        o: ["Pharmacy", "Butcher", "Bakery", "Café"],
        a: "Butcher"
    },
    {
        q: "A place where children can play outdoors. (Nơi trẻ em có thể chơi ngoài trời.)",
        o: ["Playground", "Library", "Museum", "Post office"],
        a: "Playground"
    },
    {
        q: "This is a place where people wait to catch a train. (Nơi người ta chờ để lên tàu hỏa.)",
        o: ["Bus stop", "Train station", "Airport", "Harbor"],
        a: "Train station"
    },
    {
        q: "You can buy clothes, electronics, and other goods here. (Bạn có thể mua quần áo, đồ điện tử và các hàng hóa khác ở đây.)",
        o: ["Mall", "Pharmacy", "Cinema", "Hotel"],
        a: "Mall"
    },
    {
        q: "A place where you stop and wait for the bus. (Nơi bạn dừng lại và chờ xe buýt.)",
        o: ["Bus stop", "Train station", "Airport", "Gas station"],
        a: "Bus stop"
    },
    {
        q: "A public place with streets, cars, and sidewalks. (Một nơi công cộng với đường phố, xe cộ và vỉa hè.)",
        o: ["Village", "Street", "Field", "Station"],
        a: "Street"
    },
    {
        q: "This is where fire trucks and firefighters stay. (Đây là nơi xe cứu hỏa và lính cứu hỏa làm việc.)",
        o: ["Police station", "Hospital", "Fire station", "Garage"],
        a: "Fire station"
    },
    {
        q: "You can drink coffee and eat snacks here. (Bạn có thể uống cà phê và ăn nhẹ ở đây.)",
        o: ["Café", "Bank", "Library", "Museum"],
        a: "Café"
    },
    {
        q: "A large open space where farmers sell vegetables and fruit. (Một khu vực rộng nơi nông dân bán rau và trái cây.)",
        o: ["Market", "Bakery", "Farm", "Café"],
        a: "Market"
    },
    {
        q: "A place where you see animals from around the world. (Nơi bạn xem các loài động vật từ khắp nơi trên thế giới.)",
        o: ["Farm", "Museum", "Zoo", "Park"],
        a: "Zoo"
    },
    {
        q: "You can buy stamps and send packages here. (Bạn có thể mua tem và gửi bưu kiện tại đây.)",
        o: ["Police station", "Bank", "Post office", "Stadium"],
        a: "Post office"
    },
    {
        q: "A place for relaxing, walking, or having a picnic. (Nơi để thư giãn, đi bộ hoặc dã ngoại.)",
        o: ["Park", "Library", "Hotel", "Office"],
        a: "Park"
    },
    {
        q: "A place where people go to exercise and stay fit. (Nơi người ta đến để tập thể dục và giữ gìn sức khỏe.)",
        o: ["Hospital", "Stadium", "Gym", "Bakery"],
        a: "Gym"
    },
    {
        q: "A building where people work at desks and use computers. (Một tòa nhà nơi người ta làm việc tại bàn và sử dụng máy tính.)",
        o: ["Office", "Mall", "Hotel", "Stadium"],
        a: "Office"
    },
    {
        q: "This is where you can park and fill your vehicle with fuel. (Đây là nơi bạn có thể đỗ xe và đổ xăng cho phương tiện.)",
        o: ["Bus station", "Parking lot", "Gas station", "Garage"],
        a: "Gas station"
    }
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