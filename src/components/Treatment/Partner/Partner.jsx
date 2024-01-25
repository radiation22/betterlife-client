import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Partner = () => {
  // State to manage the current question index and user answers
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(5).fill(null));
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Questions and options
  const questions = [
    {
      question: "প্রশ্ন 1: আপনার পরিচয় কি?",
      options: ["Man", "Woman", "Others"],
    },
    {
      question: "প্রশ্ন 2: আপনার সম্পর্কের অবস্থা কি?",
      options: ["Single", "Married", "In a relationship", "Divorced", "Others"],
    },
    {
      question: "প্রশ্ন 3: আপনি কি আগে কখনও থেরাপিতে ছিলেন?",
      options: ["Yes", "No"],
    },
    {
      question: "প্রশ্ন 4: কি আপনাকে আজ থেরাপি বিবেচনা করতে পরিচালিত করেছে?",
      options: [
        "Feeling depressed",
        "Feeling anxious and overwhelmed",
        "I cannot find purpose and meaning in my life",
        "I am grieving",
      ],
    },
    {
      question: "প্রশ্ন 5: আপনার থেরাপিস্ট থেকে আপনার প্রত্যাশা কি?",
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
    fetch("https://betterlife-server.vercel.app/partner", {
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
    <div className="px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-3">
        <h1 className=" mt-8 text-2xl  text-[#451748] md:text-5xl">
          আপনাকে সঠিক থেরাপিস্টের সাথে মেলাতে আমাদের সাহায্য করুন
        </h1>
        <p className="">
          একজন থেরাপিস্ট থাকা গুরুত্বপূর্ণ যার সাথে আপনি একটি ব্যক্তিগত সংযোগ
          স্থাপন করতে পারেন। নিম্নলিখিত প্রশ্নগুলি আপনার থেরাপির চাহিদা এবং
          ব্যক্তিগত পছন্দগুলির উপর ভিত্তি করে আপনাকে লাইসেন্সপ্রাপ্ত থেরাপিস্টের
          সাথে মেলে দেওয়ার জন্য ডিজাইন করা হয়েছে।
        </p>
      </div>
      <div className="border border-l-8 border-[#30C8E6] shadow-md rounded-md p-10 w-full  mt-10 ">
        {/* Progress Indicator */}
        <div className="relative mb-5">
          <div
            className="h-2 bg-[#30C8E6] rounded-full"
            style={{ width: calculateRangeWidth() }}
          ></div>
        </div>

        {/* Current Question */}
        <h2 className="text-3xl text-[#CC255D] mt-8">
          {questions[currentQuestion].question}
        </h2>

        {/* Options */}
        <ul>
          {questions[currentQuestion].options.map((option, index) => (
            <li className="text-xl ps-2" key={index}>
              <label>
                <input
                  className="m-3"
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
        <div className="text-right">
          <button
            className="px-6 py-1 text-white rounded-full  mt-5 bg-[#2FC6EC]"
            onClick={handleButtonClick}
          >
            {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partner;
