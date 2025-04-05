import { useReducer } from 'react';
import './App.css';
import Input from './Components/Input/input';
import ToDos from './Components/ToDos/todos';
import { initState, reducer } from './store/store';

function App() {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <Input state={state} dispatch={dispatch} />
            <ul>
                {state.todos.map((todo) => (
                    <ToDos 
                        key={todo.id} 
                        todo={todo} 
                        dispatch={dispatch}
                    />
                ))}
            </ul>
        </div>
    )
}

export default App;