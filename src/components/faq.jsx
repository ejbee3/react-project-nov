import React from 'react';

const faq = props => {
  const { FAQList, toggleQuestion, toggle } = props
  return (
    <div>
      <h3 className="faq-title">Frequently Asked Questions</h3>
      {FAQList.map(qa => (
        <div>
          <p> <span className="question-list" onClick={() => toggleQuestion()}>{qa.Q} </span></p>
          <p className="answer-list">{toggle ? qa.A : ""}</p>
          </div>
      ))}
      
    </div>
  );
}

export default faq;
