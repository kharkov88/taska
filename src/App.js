import React, { Component } from 'react';
import {connect} from 'react-redux'
import {ShowUsers} from './components/show_users'
import {AddUser} from './components/add_user'
import {Calcul} from './components/calcul'
import './App.css'

class App extends Component {
  render() {
    let {users,actions,convert,fetching}  = this.props
    let visible = fetching?'block':'none'
    return (
      <div className="App container">
        <ShowUsers actions={actions} users={users}  convert={convert}/>
        <AddUser adding={actions.addUser}/>
        <Calcul convert={actions.convert} convertValue={convert}/>
        <div className="loader"style={{display:visible}}>
          <img src="img/25.gif"/>  
        </div>
      </div>
    );
  }
}
export default App;
