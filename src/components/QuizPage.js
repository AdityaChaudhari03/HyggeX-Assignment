import React, { useState } from 'react';

const QuizPage = () => {
  const quizData = [
    {
      question: 'What is a function?',
      options: ['A relation', 'A set of ordered pairs', 'A rule that assigns each input exactly one output'],
      correctAnswer: 'A rule that assigns each input exactly one output'
    },
    {
      question: 'Which of the following is a function?',
      options: ['(1, 2), (2, 3), (3, 4)', '(1, 2), (2, 3), (1, 4)', '(1, 2), (1, 3), (1, 4)'],
      correctAnswer: '(1, 2), (2, 3), (3, 4)'
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSelectAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    const isCorrect = quizData[currentQuestion].correctAnswer === selectedAnswer;

    if (isCorrect) {
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }

    setSelectedAnswer('');
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Quiz on Functions and Relations</h1>
      {currentQuestion < quizData.length ? (
        <div>
          <p className="text-xl mb-4">{quizData[currentQuestion].question}</p>
          <div>
            {quizData[currentQuestion].options.map((option, index) => (
              <div key={index} className="mb-2">
                <input
                  type="radio"
                  id={`option${index}`}
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleSelectAnswer(option)}
                />
                <label htmlFor={`option${index}`} className="ml-2">{option}</label>
              </div>
            ))}
          </div>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded hover:bg-blue-700 w-full md:w-auto"
            onClick={handleSubmitAnswer}
            disabled={!selectedAnswer}
          >
            Submit Answer
          </button>
        </div>
      ) : (
        <p className="text-xl">You have completed the quiz!</p>
      )}
    </div>
  );
};

export default QuizPage;
