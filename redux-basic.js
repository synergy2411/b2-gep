const { createStore } = require("redux");

// Reducer

const initialState  = {counter : 0, result : 0}

function counterReducer(state = initialState, action){

  if(action.type === "INCREMENT"){
    return {
      ...state,
      counter : state.counter + 1
    }
  }else if(action.type === "DECREMENT"){
    return {
      ...state,
      counter : state.counter - 2
    }
  }
  return state;
}

// Creating Store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
})

// console.log(store.getState());      // ?

// Dispatching Action
store.dispatch({type : "INCREMENT"})

// console.log(store.getState());

store.dispatch({type : "DECREMENT"})
