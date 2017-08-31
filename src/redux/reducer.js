import {GET_REQUEST, UPDATE_USERS,ADD_USER,UPDATE_CONVERT,DELETE_USER,CLEAR} from './actions'
const initState ={
    users:[],
    convert:0
}
export let Reducer = (state=initState,action)=>{
    return {
        users:updating(state.users,action),
        convert:converting(state.convert=0,action),
    }
}
function updating(state,action){
    switch(action.type){
        case UPDATE_USERS:
        return [
            ...state,
            {
                id:action.obj.id,
                name:action.obj.name,
                email:action.obj.email,
                phone:action.obj.phone,
                job:action.obj.job
            }
        ]
        case ADD_USER:
        return [
            ...state,
            {
                id:++state.length,
                name:action.obj.name,
                email:action.obj.email,
                phone:action.obj.phone,
                job:action.obj.job
            }
        ]
        case DELETE_USER:
        return state.filter((item)=>item.id!=action.id)
        case CLEAR:
        return []
        default: return state;
    }
}

function converting(state,action){
    if(action.type===UPDATE_CONVERT){
        return action.number
    }
}