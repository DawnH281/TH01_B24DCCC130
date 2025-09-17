import React, { useState } from "react";

const questions = [
  {
    question: "ReactJS dùng để làm gì?",
    answers: ["Mobile App", "Web UI", "Hệ điều hành", "Cơ sở dữ liệu"],
    correct: 1,
  },
  {
    question: "Props trong React là gì?",
    answers: ["Trạng thái", "Thuộc tính truyền vào", "API", "CSS"],
    correct: 1,
  },
  {
    question: "State dùng để?",
    answers: [
      "Quản lý dữ liệu thay đổi",
      "Định nghĩa component",
      "Kết nối backend",
      "Trang trí giao diện",
    ],
    correct: 0,
  },
];

function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[current].correct) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Bài 5: Quiz App</h2>

      {showResult ? (
        <h3>
          Bạn trả lời đúng {score}/{questions.length} câu.
        </h3>
      ) : (
        <div>
          <h3>{questions[current].question}</h3>
          <div>
            {questions[current].answers.map((ans, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                style={{
                  margin: "5px",
                  padding: "8px 15px",
                  cursor: "pointer",
                }}
              >
                {ans}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
