import React, { useState } from 'react';
import '../index.css';


let initialBgColor = "red";
let initialTextColor = "white";
let initialText = "Hello, eyes on this text!";
let initialHeadingText = "Demonstration of Multiple Functionalities using React UseState Hooks";


const ChangePageDefinitions = () => {
  const [bgColor, setBgColor] = useState(initialBgColor);
  const [textColor, setTextColor] = useState(initialTextColor);
  const [headingText, setHeadingText] = useState(initialHeadingText)
  const [secondText, setSecondText] = useState(initialText)

  let pageStyles = { backgroundColor: bgColor, color: textColor };



  const changeSomeDefinitions = () => {
    if (bgColor === initialBgColor) {
    setBgColor("green");
    setTextColor("gold");
    setHeadingText("Yaaaaaah, Successfully Demonstrated!!!")
    setSecondText("Did you notice that background color, font color and text have all changed as soon as you clicked?");
  } else {
    setBgColor(initialBgColor);
    setTextColor(initialTextColor);
    setHeadingText(initialHeadingText);
    setSecondText(initialText);
  }
  }

  const originalData = () => {
    setBgColor(initialBgColor);
    setTextColor(initialTextColor);
    setHeadingText(initialHeadingText);
    setSecondText(initialText);
  }

  return (
    <>

      <div className='text-center ud-page-width' style={pageStyles}>
        <h1>{headingText}</h1>
        <h3>{secondText}</h3>
      </div>
      <div className="container text-center ud-btn">
        
        <button className="btn btn-primary" onClick={changeSomeDefinitions} onDoubleClick = {originalData}>Change Page Definitions</button>
        <p className=' text-muted ud-paragraph mb-0'>(Click the button above once to toggle page definitions, double click to return to original definitions; click 'reset' below to reset to original definitions)</p>
        <p><button className="btn btn-primary text-center" onClick = {originalData}>Reset</button></p>
      </div>
    </>
  )
}

export default ChangePageDefinitions;