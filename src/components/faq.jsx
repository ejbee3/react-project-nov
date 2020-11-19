import React from 'react';

const faq = props => {
  const { FAQList, updateToggleHistory, toggleHistory } = props
  return (
    <div>
      <h3 className="faq-title">Frequently Asked Questions</h3>
      {FAQList.map(qa => (
        <div key={qa.id}>
          <p> <span className="question-list" onClick={() => updateToggleHistory(qa.id)}>{qa.Q} </span></p>
      <p className="answer-list">{toggleHistory[qa.id - 1] ? qa.A : ""}</p>
          </div>
      ))}
      
    </div>
  );
}

export default faq;
