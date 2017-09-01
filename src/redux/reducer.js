import { combineReducers } from 'redux'
import {users,convert,fetching} from './reducers'

export default combineReducers({
    users,
    convert,
    fetching
})
