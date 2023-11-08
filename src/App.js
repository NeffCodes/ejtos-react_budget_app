import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';

const App = () => {
    return (
        <AppProvider>
            <main className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <section className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>

                    <div className='col-sm'>
                        <Remaining />
                    </div>

                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                </section>

                <section>
                    <h3 className='mt-6'>Allocation</h3>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </section>

                <section>
                    <h3 className='mt-6'>Manual Allocation</h3>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </section>      

            </main>
        </AppProvider>
    );
};
export default App;
