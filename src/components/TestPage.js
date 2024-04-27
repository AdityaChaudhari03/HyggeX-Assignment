import React, { useState } from 'react';

const TestPage = () => {
  const testData = [
    {
      question: 'What is the domain of the function f(x) = √(x+2)?',
      options: ['All real numbers', 'x ≥ -2', 'x > -2'],
      correctAnswer: 'x ≥ -2'
    },
    {
      question: 'Which of the following is an example of a one-to-one function?',
      options: ['y = x^2', 'y = 2x + 3', 'y = x + 5'],
      correctAnswer: 'y = 2x + 3'
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const handleSelectAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    const isCorrect = testData[currentQuestion].correctAnswer === selectedAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setSelectedAnswer('');
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Test on Relations and Functions</h1>
      {currentQuestion < testData.length ? (
        <div>
          <p className="text-xl mb-4">{testData[currentQuestion].question}</p>
          <div>
            {testData[currentQuestion].options.map((option, index) => (
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
        <div>
          <p className="text-xl">You have completed the test!</p>
          <p className="text-xl">Your score: {score} out of {testData.length}</p>
        </div>
      )}
    </div>
  );
};

export default TestPage;
