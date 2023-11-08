import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete, TiMinus, TiPlus } from 'react-icons/ti';

const ExpenseItem = (props) => {
  const {dispatch,currency} = useContext(AppContext);

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

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'RED_EXPENSE',
      payload: expense
    });
  }

  return (
    <tr>
      <td>{props.name}</td>
      
      <td>{currency} {props.cost}</td>

      <td>
        <button 
        className="btn btn-success rounded-circle" 
        style={{aspectRatio: '1/1', height: '100%'}}
        onClick={event=> increaseAllocation(props.name)}
        >
          <TiPlus size='1.5em'/>
        </button>
      </td>
      
      <td>        
        <button 
        className="btn btn-danger rounded-circle" 
        style={{aspectRatio: '1/1', height: '100%'}}
        onClick={event=> decreaseAllocation(props.name)}
        >
          <TiMinus size='1.5em'/>
        </button>
      </td>
      <td>
        <div style={{width: "100%"}}>
          <button 
          className="btn btn-outline-secondary rounded-circle" 
          style={{height: '2rem', width: '2rem', padding: '0'}}
          onClick={handleDeleteExpense}
          >
            <TiDelete size='1.5em'></TiDelete>
          </button>
        </div>
      </td>

    </tr>
  );
};

export default ExpenseItem;
