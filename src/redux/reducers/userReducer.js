import { ADD_USER, UPDATE_AGE, VIEW_USER } from "../actions/actionsTypes";

const initialState = {
  users: [
    { name: "Abhishek Koushal", age: 23 },
    { name: "Aman Mishra", age: 22 },
  ],
};
const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_USER:{
          let newState = {...state}
          newState.users.push({name:action.data})
          newState.temp = action.data
          console.log(newState);
          return newState
        };
        case VIEW_USER:return{...state};
        case UPDATE_AGE:{
          let newState = {...state}
          newState.users[action.data['index']]['age'] = action.data.age
          newState.temp = action.data.age
          console.log(newState);
          return newState
        };
        default : return state
    }
}
export default userReducer;