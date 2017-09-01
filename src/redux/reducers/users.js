import {UPDATE_USERS,ADD_USER,DELETE_USER,CLEAR} from '../actions'
export function users(state=[],action){
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