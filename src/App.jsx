import { useEffect, useState } from "react";
import "./App.css";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [feedbackTypes, setFeedback] = useState(() => {
    const data = JSON.parse(window.localStorage.getItem("feedbackTypes"));
    if (data) {
      return data;
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevTypes) => ({
      ...prevTypes,
      [feedbackType]: prevTypes[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    window.localStorage.setItem("feedbackTypes", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback feedbackTypes={feedbackTypes} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;