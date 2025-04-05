export const initState = {
    text: "",
    todos: [],
    error: "",
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "SET_TEXT":
            return {
                ...state,
                text: action.payload,
                error: ""
            };
        case "ADD_TODO":
            if (!state.text.trim()) {
                return {
                    ...state,
                    error: "Input is required"
                }
            }
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        title: state.text,
                        isDone: false
                    }
                ],
                text: ""
            };
        case "REMOVE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case "CLEAR_ALL":
            return {
                ...state,
                todos: []
            };
        case "CLEAR_DONE":
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.isDone)
            };
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.payload 
                    ? { ...todo, isDone: !todo.isDone } 
                    : todo
                )
            };
        case "UPDATE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.payload.id 
                    ? { ...todo, title: action.payload.title } 
                    : todo
                )
            };
            
            default:
            return state;
    }
}