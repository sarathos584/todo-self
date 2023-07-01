import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NewGoals from './components/new-goals/NewGoals';
import GoalList from './components/goal-lists/GoalList';
function App() {
const [goals,setGoals]= useState([
  {id:1,text:'First Goal'},
  {id:2,text:'Second Goal'},
  {id:3,text:'Third Goal'}
])
const addGoal = (newGoal)=>{
  setGoals((prevGoal)=> prevGoal.concat(newGoal))
}

  return (
   <div className="container-fluid">
    <div className="container">
      <h1>Study Goals</h1>
        <NewGoals  onAddGoal={addGoal}/>
        <GoalList goals={goals}/>
    </div>
   </div>
  );
}

export default App;
