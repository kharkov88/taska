import {connect}from'react-redux'
import {bindActionCreators} from'redux'
import {AddUser} from'../components/add_user'
import * as actions from '../redux/actions'

const mapDispatchToProps = function (dispatch){  
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export const NewUser = connect(
    null,
    mapDispatchToProps
)(AddUser)
