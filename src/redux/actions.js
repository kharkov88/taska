export const UPDATE_USERS = 'UPDATE_USERS'
export function updateUsers(obj){
    return{
        type:'UPDATE_USERS',
        obj
    }
}
export const ADD_USER ='ADD_USER'
export function addUser(obj){
    return{
        type:'ADD_USER',
        obj
    }
}
export const DELETE_USER ='DELETE_USER'
export function delUser(id){
    return{
        type:'DELETE_USER',
        id
    }    
}

export const GET_REQUEST = 'GET_REQUEST'
export function getRequst(){
    return {
        type:GET_REQUEST
    }
}
export const CLEAR = 'CLEAR'
export function clearUsers(){
    return{
        type: 'CLEAR'
    }
}
export const  UPDATE_CONVERT = 'UPDATE_CONVERT'
export function updateConvert(number){
    return{
        type:'UPDATE_CONVERT',
        number
    }
}
//асинхроны
export function getUsers(url='/data/user.json'){
    return dispatch => {
        dispatch(getRequst())
        dispatch(clearUsers())
        fetch(url,{
        })
        .then(response=>{
            response.json().then(data=>{
                if(data.length==0){
                    document.getElementById('result_users').innerHTML = 'Users not found'
                }
                else{
                    document.getElementById('result_users').innerHTML = ''
                }       
                data.map(item=>dispatch(updateUsers({
                    id:item.id,
                    name:item.name,
                    email:item.email,
                    phone:item.phone,
                    job:item.company.name
                })))   
                dispatch(getRequst())             
            })          
        }) 
    }
}

export function convert(fromVal,enter,toVal){
    return (dispatch) => {
        dispatch(getRequst())
        fetch(`http://api.fixer.io/latest?base=${fromVal}`,{
            method:'get'
        })  
        .then(response=>{
            response.json().then(data=>{                           
                let kef = data.rates[toVal]
                fromVal===toVal
                        ?dispatch(updateConvert(enter))
                        :dispatch(updateConvert((enter*kef).toFixed(2)))    
                 dispatch(getRequst())     
            })          
        }) 
    }
}
