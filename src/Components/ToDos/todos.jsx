import React, { useState } from "react";
const ToDos = ({todo,remove,changeTodo}) => {

    const[open,setOpen] = useState(true)
    const [editText, seteditText] = useState(todo.title);

    const Blur = () => {
        setOpen(true);
        if(editText !== todo.title){
            todo.title == editText;
        }
    };

    const PressBtn = (e) =>{
        if(e.key == 'Enter'){
            setOpen(true);
            if(editText !== todo.title){
                todo.title = editText;
            }
        }
    };

    return(
        <li key={todo.id}>
                <input className='input' type={'checkbox'} checked ={todo.isDone} onChange={() => changeTodo(todo.id)}/>
                {
                    open ?
                    <span onDoubleClick={()=>setOpen(false)}>{todo.title}{todo.text}</span>: <input value={editText} onChange={(e)=> seteditText(e.target.value)} onBlur={Blur} onKeyPress={PressBtn}/> 
                }
                <button className="btn 1" onClick= {() => remove(todo.id)}>X</button>
              </li>
    )
}

export default ToDos