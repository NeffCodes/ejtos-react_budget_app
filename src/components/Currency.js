import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const selectStyles = {
  backgroundColor: '#d1e7dd',
  padding: 0,
  margin: 0,
  border: "transparent",
  boxShadow: "0 0 10px 100px transparent inset",
}

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = val => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val
    })
  }

  return (
    <section className='alert alert-success text-primary-emphasis d-flex gap-2 flex-row justify-content-center align-items-center'>
      <label for='Currency' className='fw-bold'>Currency(</label>
      <select 
        name="Currency" 
        id="Currency" 
        className='form-select custom'
        // style={{
        //   background: 'var(--bs-success-subtle)', 
        //   borderColor: 'transparent', 
        //   margin:0, 
        //   padding:0, 
        // }}
        style={selectStyles}
        aria-label="Select Currency Type"
        onChange={event => changeCurrency(event.target.value)}
      >
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
      )
    </section>
  )
};

export default Currency;
