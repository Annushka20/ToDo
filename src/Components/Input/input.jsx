import React from 'react'

const Input = ({text,changeText,addTodo,error,clearAll,clearUpdated,count}) =>{
    return (
    <div>
        <input className={`'input2' ${error ? 'input-error' : ''}`} value={text} onChange={changeText} />
        {error && <p className='error-msg'>{error}</p>}
        <button className='btn2' onClick={addTodo}>Add</button>
        <button className='btn2' onClick={clearAll}>Clear all</button>
        <button className='btn2' onClick={clearUpdated}>Clear done ones</button>
        <p>{`Remaining ${count} tasks to do ! `}</p>
    </div>
    )
   } 

export default Input