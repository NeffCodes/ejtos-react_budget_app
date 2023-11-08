import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
  const {dispatch} = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id
    })
  }

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    });
  }

  return (
    <tr>
      <td>{props.name}</td>
      <td>${props.cost}</td>
      <td className="d-grid grid-align-center">
        <button className="btn btn-outline-success" onClick={event=> increaseAllocation(props.name)}>+</button>
      </td>
      <td>
        <div style={{width: "100%"}}>
         <button className="btn btn-danger p-1 my-0 mx-2" onClick={handleDeleteExpense}
          >
            <TiDelete size='1.5em'></TiDelete>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ExpenseItem;
