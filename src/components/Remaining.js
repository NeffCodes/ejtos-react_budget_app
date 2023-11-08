import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const {expenses, budget} = useContext(AppContext);
  console.log('remaing', budget)
  const totalExpenses = expenses.reduce( (total, item) => total + item.cost, 0)
  const alertType = totalExpenses > budget ?
    'alert-danger' :
    'alert-success';

  return (
    <section className={`alert ${alertType} d-flex flex-row justify-content-center`}>
      <p className="m-0 fw-bold">Remaining: ${budget - totalExpenses}</p>
    </section>
  )
};

export default Remaining;
