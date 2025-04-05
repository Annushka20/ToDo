import React, { useState } from "react";

const ToDos = ({todo, dispatch}) => {
    const [open, setOpen] = useState(true);
    const [editText, setEditText] = useState(todo.title);

    const handleBlur = () => {
        setOpen(true);
        if (editText !== todo.title) {
            dispatch({
                type: "UPDATE_TODO",
                payload: { id: todo.id, title: editText }
            });
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setOpen(true);
            if (editText !== todo.title) {
                dispatch({
                    type: "UPDATE_TODO",
                    payload: { id: todo.id, title: editText }
                });
            }
        }
    };

    return (
        <li key={todo.id}>
            <input 
                className='input' 
                type={'checkbox'} 
                checked={todo.isDone} 
                onChange={() => dispatch({type: "TOGGLE_TODO", payload: todo.id})}
            />
            {
                open ? (
                    <span onDoubleClick={() => setOpen(false)}>
                        {todo.title}
                    </span>
                ) : (
                    <input 
                        value={editText} 
                        onChange={(e) => setEditText(e.target.value)} 
                        onBlur={handleBlur} 
                        onKeyPress={handleKeyPress}
                    />
                )
            }
            <button className="btn 1" onClick={() => dispatch({type: "REMOVE_TODO", payload: todo.id})}>
                X
            </button>
        </li>
    )
}

export default ToDos;