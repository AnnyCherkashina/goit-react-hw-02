const Feedback = ({ feedbackTypes, totalFeedback }) => {
    const positiveFeedback = Math.round(
        (feedbackTypes.good / totalFeedback) * 100
    );
    return (
        <div>
            <p>Good: {feedbackTypes.good}</p>
            <p>Neutral: {feedbackTypes.neutral}</p>
            <p>Bad: {feedbackTypes.bad}</p>
            <p>Total Feedback: {totalFeedback}</p>
            <p>Positive Percentage: {positiveFeedback}%</p>
        </div>
    );
};

export default Feedback;