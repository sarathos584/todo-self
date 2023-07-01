import React from "react";
import "./goal-lists.css";
function GoalList(props) {
  const { goals } = props;
  const onClickHandler = (event) => {
    const activeElements = document.querySelector(".active");
    if (activeElements != null) {
      activeElements.classList.remove("active");
    }
    event.target.className = "active";
  };

  return (
    <ul className="goal-list">
      {goals.map((goal) => {
        return (
          <li key={goal.id} onClick={onClickHandler}>
            {goal.text}
          </li>
        );
      })}
    </ul>
  );
}

export default GoalList;
