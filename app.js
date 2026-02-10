const roadmap = [
  "第 1 周：变量、数据类型、输入输出（cin/cout）",
  "第 2 周：条件与循环（if/for/while）",
  "第 3 周：函数与递归",
  "第 4 周：数组、字符串、vector",
  "第 5 周：指针与引用",
  "第 6 周：类与对象（OOP）",
  "第 7 周：STL（map/set/algorithm）",
  "第 8 周：综合项目 + 题目复盘",
];

const cards = [
  {
    title: "引用（Reference）",
    content: "引用是变量的别名，声明后必须初始化，常用于函数参数传递以避免拷贝。",
  },
  {
    title: "指针（Pointer）",
    content: "指针保存的是地址。理解 * 和 & 的配合，是掌握内存模型的关键。",
  },
  {
    title: "vector",
    content: "vector 是动态数组，支持自动扩容。常用操作有 push_back、size、sort。",
  },
  {
    title: "面向对象",
    content: "通过类（class）封装数据和行为，常见特性有封装、继承、多态。",
  },
];

const quiz = {
  question: "在 C++ 中，用于动态数组的标准容器是？",
  options: ["set", "vector", "map", "stack"],
  answer: "vector",
};

const roadmapElement = document.getElementById("roadmap");
const flashcardTitle = document.getElementById("flashcard-title");
const flashcardContent = document.getElementById("flashcard-content");
const nextCardButton = document.getElementById("next-card");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");

let cardIndex = 0;

function renderRoadmap() {
  roadmap.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    roadmapElement.appendChild(li);
  });
}

function renderCard() {
  const card = cards[cardIndex];
  flashcardTitle.textContent = card.title;
  flashcardContent.textContent = card.content;
}

function nextCard() {
  cardIndex = (cardIndex + 1) % cards.length;
  renderCard();
}

function renderQuiz() {
  quizQuestion.textContent = quiz.question;
  quiz.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(option));
    quizOptions.appendChild(button);
  });
}

function handleAnswer(choice) {
  if (choice === quiz.answer) {
    quizFeedback.textContent = "回答正确！继续保持！";
    quizFeedback.className = "feedback ok";
    return;
  }

  quizFeedback.textContent = `回答不正确，正确答案是：${quiz.answer}`;
  quizFeedback.className = "feedback bad";
}

nextCardButton.addEventListener("click", nextCard);
renderRoadmap();
renderCard();
renderQuiz();
