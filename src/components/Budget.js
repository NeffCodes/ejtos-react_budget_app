import React from 'react';
import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, expenses, dispatch, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget)
  const HARD_BUDGET_LIMIT = 20000;
  const TOTAL_EXPENSES = expenses.reduce( (total, item) => total + item.cost, 0)


  const handleBudgetChange = event => {
    let val = event.target.valueAsNumber;

    //budget cannot exceed limit
    if(val > HARD_BUDGET_LIMIT) {
      alert('The budget value cannot exceed $'+ HARD_BUDGET_LIMIT);
      setNewBudget(HARD_BUDGET_LIMIT);
      val = HARD_BUDGET_LIMIT;
    }

    //budget cannot be lower than expenses
    if(val < TOTAL_EXPENSES) {
      alert('You cannot reduce the budge value lower than the spending');
      setNewBudget(TOTAL_EXPENSES);
      val = TOTAL_EXPENSES;
    }

    //set budget
    setNewBudget(val);  
    dispatch({
      type:'SET_BUDGET',
      payload: val
    })
  };

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
        Budget: {currency}
      </p>
      <input 
        type='number' 
        step='10' 
        value={newBudget} 
        min={TOTAL_EXPENSES}
        max={HARD_BUDGET_LIMIT}
        onChange={handleBudgetChange}
        className='p-2 '
      />
    </div>
  );
};

export default Budget;