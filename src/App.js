import React from 'react';
import './style.css';
import FirstGoal from "../components/FirstGoal"
import SecondGoal from "../components/SecondGoal"
import GoalList from "../components/GoalList"

export default function App() {
  return (
   <> 
      <GoalList />
      <FirstGoal />
      <SecondGoal />
    </>
  );
}
