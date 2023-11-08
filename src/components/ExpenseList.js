import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";

import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const {expenses} = useContext(AppContext);

  return (
    <div className="table-responsive">
      <table className='table align-middle'>
        <thead className="thead-light">
          <tr>
            <th scope="col">Department</th>
            <th scope="col">Allocated Budget</th>
            <th scope="col">Increase by 10</th>
            <th scope="col">Decrease by 10</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody className="table-striped">
          {expenses.map((expense) => (
              <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList
