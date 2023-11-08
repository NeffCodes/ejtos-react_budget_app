import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const {expenses, currency} = useContext(AppContext);
  const totalExpenses = expenses.reduce( (total, item) => total + item.cost, 0)

  return (
    <section className={`
      alert 
      alert-primary
      d-flex 
      flex-row 
      justify-content-center
    `}>
      <p className="m-0 fw-bold">Expenditures: {currency}{totalExpenses}</p>
    </section>
  );
};

export default ExpenseTotal
