import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Individual = () => {
  // State to manage the current question index and user answers
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(5).fill(null));
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Questions and options
  const questions = [
    {
      question: "Question 1: What is your Identity?",
      options: ["Man", "Woman", "Others"],
    },
    {
      question: "Question 2: What is your relationship Status?",
      options: ["Single", "Married", "In a relationship", "Divorced", "Others"],
    },
    {
      question: "Question 3: Have you ever been in therapy before?",
      options: ["Yes", "No"],
    },
    {
      question: "Question 4: What led you to consider therapy today?",
      options: [
        "Feeling depressed",
        "Feeling anxious and overwhelmed",
        "I cannot find purpose and meaning in my life",
        "I am grieving",
      ],
    },
    {
      question: "Question 5: What are your expectations from your therapist?",
      options: [
        "Explore my past",
        "Teaches me new skill",
        "Challenges my belief",
        "I don't know",
      ],
    },
  ];

  // Function to calculate the range width based on the current question
  const calculateRangeWidth = () => {
    return ((currentQuestion + 1) / questions.length) * 100 + "%";
  };

  // Function to handle option selection
  const handleOptionSelect = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  // Function to handle button click (either "Next" or "Submit")
  const handleButtonClick = () => {
    if (userAnswers[currentQuestion] === null) {
      // Alert the user or take any other action to indicate that an option must be selected
      alert("Please select an option before moving to the next question.");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Handle completion (e.g., submit answers)
      logUserAnswers();
    }
  };

  // Function to log user answers along with questions
  const logUserAnswers = () => {
    console.log("User Survey Answers:");
    const userResponses = [];

    questions.forEach((question, index) => {
      const response = {
        question: question.question,
        answer: userAnswers[index],
      };
      userResponses.push(response);

      console.log(`${response.question}: ${response.answer}`);
    });

    // Example: Send data to a backend API
    fetch("https://betterlife-server.vercel.app/individual", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userResponses, email: user?.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        toast.success(" Thanks for your answer. We will contact you soon");
        navigate("/");

        // Handle the server response as needed
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
        // Handle the error as needed
      });
  };

  return (
    <div className="px-16">
      <h1 className="text-center mt-8 text-3xl">
        Help us match you to the right therapist
      </h1>
      <p className="text-center">
        It's important to have a therapist who you can establish a personal
        connection with. The following questions are designed to match you to a
        licensed therapist based on your therapy needs and personal preferences.
      </p>
      <div className="border shadow-md rounded-md p-10 w-full mx-auto mt-10 md:w-[50%]">
        {/* Progress Indicator */}
        <div className="relative mb-5">
          <div
            className="h-2 bg-[#397A4A] rounded-full"
            style={{ width: calculateRangeWidth() }}
          ></div>
        </div>

        {/* Current Question */}
        <h2 className="text-2xl font-bold mt-8">
          {questions[currentQuestion].question}
        </h2>

        {/* Options */}
        <ul>
          {questions[currentQuestion].options.map((option, index) => (
            <li className="text-xl" key={index}>
              <label>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={userAnswers[currentQuestion] === option}
                  onChange={() => handleOptionSelect(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>

        {/* Next/Submit Button */}
        <button
          className="px-6 py-1 text-white rounded-full w-full mt-5 bg-[#397A4A]"
          onClick={handleButtonClick}
        >
          {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Individual;
