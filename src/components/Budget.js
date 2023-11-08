import React from 'react';
import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget)

  const handleBudgetChange = event => setNewBudget(event.target.value);

  return (
    <div className={`
      alert 
      alert-secondary 
      d-flex 
      flex-row 
      justify-content-center 
      gap-2
    `}>
      <p className={`
        p-2 
        m-0 
        fw-bold 
        flex-grow-0 
        flex-shrink-0
      `}>
        Budget: $
      </p>
      <input 
        type='number' 
        step='10' 
        value={newBudget} 
        onChange={handleBudgetChange}
        className='p-2 '
      />
    </div>
  );
};

export default Budget;