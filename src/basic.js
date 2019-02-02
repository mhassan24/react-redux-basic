import {createStore} from 'redux';

//reducer
function Todo(state={name :"hassan"},action){
    switch (action.type){
        case "ADD_TODO":
        return{
            ...state,
            text:"TODO_ADDED"
        }
        default:
        break;
    }

}
const store = createStore(Todo, {});

//action dispatch
store.dispatch({
type:"ADD_TODO",
})
console.log(store.getState())

export default store;
