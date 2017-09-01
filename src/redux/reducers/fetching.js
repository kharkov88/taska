import {GET_REQUEST} from '../actions'
export function fetching(state=false,action){
    if(action.type===GET_REQUEST){
        return !state
    }
    return state;
}