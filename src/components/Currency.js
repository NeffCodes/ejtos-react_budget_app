import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = val => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val
    })
  }

  return (
    <section className='alert alert-success d-flex gap-2 flex-row justify-content-center align-items-center'>
      <label for='Currency' className='fw-bold'>Currency:</label>
      <select 
        name="Currency" 
        id="Currency" 
        className='form-select form-select-success'
        style={{background: 'transparent', borderColor: 'black', }}
        aria-label="Select Currency Type"
        onChange={event => changeCurrency(event.target.value)}
      >
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
    </section>
  )
};

export default Currency;
