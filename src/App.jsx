import { useState } from 'react'
import './App.css'
import Input from './Components/Input/input';
import ToDos from './Components/ToDos/todos';

function App() {
  const [text, setText]= useState('');
  const [todos, setTodos]= useState([]);
  const [error, setError]= useState('');

   const changeText = (e) =>{
    setText(e.target.value);
   }
   
   const addTodo = (e) =>{
    if(text.trim()){
      setTodos((prev)=>{
        return [
          ...prev,
          {
            id : Date.now(),
            title: text,
            isDone: false
          }
        ]
      })
      setText('');
      setError('');
    } else {
      setError('Input field is required')
    }
   }

   const remove = (id) => {
    setTodos (todos.filter((todo)=>todo.id !== id))
 }

 const clearAll = () =>{
  setTodos([]);
 }

 const clearUpdated = () =>{
  setTodos(todos.filter(todo=> !todo.isDone));
 };

  const changeTodo = (id) =>{
    setTodos(todos.map((todo)=>{
      if(todo.id === id){
        return {
          ...todo,
          isDone : !todo.isDone
        }
      } else {
        return todo
      }
    }))
 }

 const remainingTasks=todos.filter((todo)=> !todo.isDone).length;

  return (
    <div>
     
     <Input 
     text ={text}
     changeText ={changeText}
     addTodo ={addTodo}
     error ={error}
     clearAll ={clearAll}
     clearUpdated={clearUpdated}
     count ={remainingTasks}
    />
  

      <ul>
        {
          todos.map((todo)=>{
            return  <ToDos key={todo.id} todo={todo} changeTodo={changeTodo} remove={remove}/>
          })
        }
      </ul>
    </div>
  )
}

export default App
