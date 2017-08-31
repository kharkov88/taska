import {UPDATE_USERS,ADD_USER,UPDATE_COUNTER,DELETE_USER} from './actions'
const initState ={
    users:[],
    counterUs:0
}
export let Reducer = (state=initState,action)=>{
    return {
        users:updating(state.users,action),
        counter:upCounter(state.counter,action)
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
        default: return state;
    }
}

function upCounter(state=0,action){
    if(action.type===UPDATE_COUNTER){
        return action.number
    }
}