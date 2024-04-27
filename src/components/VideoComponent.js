import React, { useState, useRef } from "react";
import Path from "../Images/Path.jpg";
import { MdRefresh } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import QuizPage from "./QuizPage";
import TestPage from "./TestPage";
import FAQSection from "./FAQSection";
import FlashCard from "./FlashCard";

const VideoComponent = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const [activeSection, setActiveSection] = useState("Study");
  const videos = [
    "https://mathanticsvideo-13944.kxcdn.com/files/video/Welcome_Video.mp4",
    "https://mathanticsvideo-13944.kxcdn.com/files/video/PlaceValue_MA.mp4",
    "https://mathanticsvideo-13944.kxcdn.com/files/video/MultiDigitAddition.mp4",
    "https://mathanticsvideo-13944.kxcdn.com/files/video/Welcome_Video.mp4",
    "https://mathanticsvideo-13944.kxcdn.com/files/video/PlaceValue_MA.mp4",
    "https://mathanticsvideo-13944.kxcdn.com/files/video/MultiDigitAddition.mp4",
    "https://mathanticsvideo-13944.kxcdn.com/files/video/Welcome_Video.mp4",
    "https://mathanticsvideo-13944.kxcdn.com/files/video/PlaceValue_MA.mp4",
    "https://mathanticsvideo-13944.kxcdn.com/files/video/MultiDigitAddition.mp4",
    "https://mathanticsvideo-13944.kxcdn.com/files/video/MultiDigitAddition.mp4",
  ];

  const playNextVideo = () => {
    setVideoIndex((videoIndex) => videoIndex + 1);
  };

  const playPreviousVideo = () => {
    setVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const refreshVideo = () => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 md:mb-10 flex flex-col md:flex-row items-center md:items-start">
  <img src={Path} alt="path" className="mb-4 md:mb-0" />
  <p className="text-xl text-gray-500 md:ml-4">
    {">"} Mathematics {">"}{" "}
    <span className="text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text">
      Relation and Function
    </span>
  </p>
</div>

      <h1 className="text-left text-2xl font-medium text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text mb-8">
        Relations and Functions ( Mathematics )
      </h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap gap-3 mb-7">
          <button
            className={
              activeSection === "Study"
                ? "text-blue-500 font-bold focus:outline-none focus:border-b-2 focus:border-blue-500"
                : "text-gray-500"
            }
            onClick={() => handleSectionChange("Study")}
          >
            Study
          </button>
          <button
            className={
              activeSection === "Quiz"
                ? "text-blue-500 font-bold focus:outline-none focus:border-b-2 focus:border-blue-500"
                : "text-gray-500"
            }
            onClick={() => handleSectionChange("Quiz")}
          >
            Quiz
          </button>
          <button
            className={
              activeSection === "Test"
                ? "text-blue-500 font-bold focus:outline-none focus:border-b-2 focus:border-blue-500"
                : "text-gray-500"
            }
            onClick={() => handleSectionChange("Test")}
          >
            Test
          </button>
          <button
            className={
              activeSection === "Game"
                ? "text-blue-500 font-bold focus:outline-none focus:border-b-2 focus:border-blue-500"
                : "text-gray-500"
            }
            onClick={() => handleSectionChange("Game")}
          >
            Game
          </button>
          <button
            className={
              activeSection === "Others"
                ? "text-blue-500 font-bold focus:outline-none focus:border-b-2 focus:border-blue-500"
                : "text-gray-500"
            }
            onClick={() => handleSectionChange("Others")}
          >
            Others
          </button>
        </div>
        {activeSection === "Study" && (
          <div>
            <video
              ref={videoRef}
              className="w-full max-w-lg mb-4 rounded-3xl"
              controls
            >
              <source src={videos[videoIndex]} type="video/mp4" />
            </video>
            <div className="flex justify-center space-x-4">
              <button
                className=" font-bold py-2 px-4 rounded text-blue-600 text-2xl"
                onClick={refreshVideo}
              >
                <MdRefresh />
              </button>
              <button
                className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white font-bold p-3 rounded-full"
                onClick={playPreviousVideo}
              >
                <GrPrevious />
              </button>
              <span className="pt-1 font-bold text-xl pl-5 pr-5">
                {videoIndex}/10
              </span>
              <button
                className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500  text-white font-bold p-3 rounded-full"
                onClick={playNextVideo}
              >
                <GrNext />
              </button>
            </div>
          </div>
        )}
        {activeSection === "Quiz" && <QuizPage />}
        {activeSection === "Test" && <TestPage />}
        {activeSection === "Game" && (
          <div>
            <h1>Play a Amazing Game</h1>
          </div>
        )}
        {activeSection === "Others" && (
          <div>
            <h1>Others Section</h1>
          </div>
        )}
      </div>
      <div>
        <FlashCard />
      </div>
      <div>
        <FAQSection />
      </div>
    </div>
  );
};

export default VideoComponent;
