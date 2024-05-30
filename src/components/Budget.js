
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { budget } = useContext(AppContext);
    // const { dispatch } = useContext(AppContext);

    // if(true) {
    //     alert("Cannot set budget to be lower than the spending");
    //     setCost("");
    //     return;
    // }
    // const handleBudgetChange = () => {
    //     dispatch({
    //         type: 'SET_BUDGET',
    //         payload: props.id,
    //     });
    // };
    
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: ₹{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;