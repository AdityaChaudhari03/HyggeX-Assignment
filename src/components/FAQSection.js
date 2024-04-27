import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";

const FAQSection = () => {
  // Define FAQ data
  const [faqData, setFaqData] = useState([
    {
      question: 'Can education flashcards be used for all age students?',
      answer: 'Flashcards are beneficial for students of all ages. They support basic skill development in younger learners, like letter recognition and arithmetic, while aiding older students in advanced concepts such as foreign language vocabulary and scientific terminology. Flashcards enhance memory retention and facilitate self-paced study across age groups.',
      isOpen: false
    },
    {
      question: 'How do education flashcards work?',
      answer: 'Education flashcards are study tools with questions on one side and answers on the other. Students repeatedly review them, testing their recall, which strengthens memory and learning. They are versatile aids suitable for all subjects and ages.',
      isOpen: false
    },
    {
      question: 'Can education flashcards be used for test preparation?',
      answer: 'Yes, education flashcards are ideal for test preparation. They help students review and reinforce key concepts, facts, and information through active recall, aiding in better retention and exam readiness.',
      isOpen: false
    }
  ]);

  const toggleFAQ = (index) => {
    setFaqData(prevFAQData => {
      const updatedFAQData = [...prevFAQData];
      updatedFAQData[index] = { ...updatedFAQData[index], isOpen: !updatedFAQData[index].isOpen };
      return updatedFAQData;
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text mt-7 mb-10">FAQ</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 md:w-[70%] mx-auto">
            <div className="flex justify-between items-center">
              <h2>{faq.question}</h2>
              <button
                className="text-blue-500 font-semibold focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.isOpen ? <RiArrowDropDownLine /> : <MdKeyboardArrowRight />}
              </button>
            </div>
            {faq.isOpen && (
              <p className="mt-2 text-gray-500">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
