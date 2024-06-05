const Feedback = ({ feedbackTypes, totalFeedback, positiveFeedbackPercentage }) => {
    return (
        <div>
            <p>Good: {feedbackTypes.good}</p>
            <p>Neutral: {feedbackTypes.neutral}</p>
            <p>Bad: {feedbackTypes.bad}</p>
            <p>Total Feedback: {totalFeedback}</p>
            <p>Positive Percentage: {positiveFeedbackPercentage}%</p>
        </div>
    );
};

export default Feedback;