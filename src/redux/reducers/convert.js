import {UPDATE_CONVERT} from '../actions'
export function convert(state=0,action){
    if(action.type===UPDATE_CONVERT){
        return action.number
    }
    return state;
}