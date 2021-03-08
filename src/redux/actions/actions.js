import { ADD_AGE, ADD_USER, UPDATE_AGE, VIEW_USER } from "./actionsTypes"

const addUser = (username) =>{
    return {
        type:ADD_USER,
        data:username
    }
}
const viewUser = ()=>{
    return {
        type:VIEW_USER,
    }
}
const updateAge = (nameIndex,age)=>{
    return {
        type:UPDATE_AGE,
        data:{index:nameIndex,age:age}
    }
}
const addAge = ()=>{
    return {
        type:ADD_AGE,
    }
}
export { addAge,addUser,updateAge,viewUser};
