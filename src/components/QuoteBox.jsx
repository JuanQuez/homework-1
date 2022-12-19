import React, { useState } from "react";
import phrases from "../quotes.json";
import gradients from "../gradients.json";

const QuoteBox = () => {
  const randomPhrase = Math.floor(Math.random() * phrases.length);

  const [index, setIndex] = useState(randomPhrase);

  const changePhrase = () => {
    const secondRandom = Math.floor(Math.random() * phrases.length);
    setIndex(secondRandom);
  };

  const randomColors = Math.floor(Math.random() * gradients.length);

  document.body.style = `background: ${gradients[randomColors]}`;

  /* Se me complicó bastante darle el color aleatorio a las letras de la sección. */

  const fontColor = gradients[Math.floor(Math.random() * gradients.length)];
  document.body.style = `background: ${fontColor}`;

  return (
    <div className="card" style={{ color: fontColor }}>
      <div className="card-info">
        <i className="fa-solid fa-quote-left"></i>
        <p>{phrases[index].quote}</p>
      </div>
      <h2>{phrases[index].author}</h2>
      <button onClick={changePhrase} style={{ color: fontColor }}>
        <i className="fa-solid fa-share"></i>
      </button>
    </div>
  );
};

export default QuoteBox;
