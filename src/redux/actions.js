export const UPDATE_USERS = 'UPDATE_USERS'
export function updateUsers(obj){
    return{
        type:'UPDATE_USERS',
        obj
    }
}
export const  UPDATE_COUNTER = 'UPDATE_COUNTER'
export function updateCounter(number){
    return{
        type:'UPDATE_COUNTER',
        number
    }
}
export const ADD_USER ='ADD_USER'
export function addUser(obj){
    return{
        type:'ADD_USER',
        obj
    }
}
export const GET_REQUEST = 'GET_REQUEST'
export function getRequst(){
    return {
        type:GET_REQUEST
    }
}

export const GET_USERS = 'GET_USERS'
export function getUsers(){
    return dispatch => {
        dispatch({
            type:GET_REQUEST
        })
        fetch('https://jsonplaceholder.typicode.com/users',{
            method:'get'
        })
        .then(response=>{
            response.json().then(data=>{
                
                data.map(item=>dispatch(updateUsers({
                    id:item.id,
                    name:item.name,
                    email:item.email,
                    phone:item.phone,
                    job:item.company.name
                })))
                dispatch(updateCounter(data.length))
                //dispatch(getRequst())                
            })          
        }) 
    }
}