import React, { useState } from "react";
import "./new-goal.css";
function NewGoals(props) {
  const [enteredText, setEnteredText] = useState("");
   const addNewGoal = (event)=>{
    event.preventDefault()
    const newGoalData = {
        id:Math.random(),
        text:enteredText
    }
    props.onAddGoal(newGoalData)
    setEnteredText('')
   }

  const onTextChangeHandler = (event)=>{
    setEnteredText(event.target.value)
  }
  return (
    <form className="form-group" onSubmit={addNewGoal}>
      <input type="text" value={enteredText} onChange={onTextChangeHandler} />
      <button type="submit">ADD GOAL</button>
    </form>
  );
}

export default NewGoals;
