import {UPDATE_USERS,ADD_USER,UPDATE_COUNTER} from './actions'
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
                name:action.obj.name,
                email:action.obj.email,
                phone:action.obj.phone,
                job:action.obj.job
            }
        ]
        default: return state;
    }
}

function upCounter(state,action){
    if(action.type===UPDATE_COUNTER){
        return state=action.number
    }
}