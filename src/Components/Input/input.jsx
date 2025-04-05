import React from 'react'

const Input = ({state, dispatch}) => {
    const remainingTasks = state.todos.filter(todo => !todo.isDone).length;
    
    return (
        <div>
            <input 
                className={`input2 ${state.error ? 'input-error' : ''}`} 
                value={state.text} 
                onChange={(e) => dispatch({type: "SET_TEXT", payload: e.target.value})} 
            />
            {state.error && <p className='error-msg'>{state.error}</p>}
            <button className='btn2' onClick={() => dispatch({type: "ADD_TODO"})}>Add</button>
            <button className='btn2' onClick={() => dispatch({type: "CLEAR_ALL"})}>Clear all</button>
            <button className='btn2' onClick={() => dispatch({type: "CLEAR_DONE"})}>Clear done ones</button>
            <p>{`Remaining ${remainingTasks} tasks to do!`}</p>
        </div>
    )
}

export default Input