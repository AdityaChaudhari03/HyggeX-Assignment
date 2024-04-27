import React, { useState } from 'react';
import Group from "../Images/Group.jpg";
import Frame from "../Images/Frame.jpg";
import { FaPlusCircle } from "react-icons/fa";

const FlashCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateFlashcard = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="mt-14 flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex gap-5 mb-5 md:mb-0">
        <img src={Group} alt="Group" className="bg-white p-2 rounded-full" />
        <img src={Frame} alt="Frame" className="" />
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:items-center">
        <div className="flex items-center h-10">
          <FaPlusCircle onClick={handleCreateFlashcard} className="cursor-pointer" />
          <button className="text-xl text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text font-semibold" onClick={handleCreateFlashcard}>
            Create Flashcard
          </button>
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Add Flashcard</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question:</label>
                  <input type="text" id="question" name="question" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4">
                  <label htmlFor="answer" className="block text-sm font-medium text-gray-700">Answer:</label>
                  <input type="text" id="answer" name="answer" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add Flashcard
                </button>
              </form>
              <button className='mt-3 bg-red-500 px-5 py-1 text-white rounded-sm' onClick={() => setIsModalOpen(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashCard;
