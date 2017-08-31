import React, { Component } from 'react';
import {connect} from 'react-redux'
import {ShowUsers} from './components/show_users'
import {NewUser} from './containers/connect_adduser'
import {Calcul} from './components/calcul'
import './App.css'

class App extends Component {
  render() {
    let {users,actions,convert}  = this.props
    return (
      <div className="App container">
        <ShowUsers actions={actions} users={users}  convert={convert}/>
        <NewUser/>
        <Calcul convert={actions.convert} convertValue={convert}/>
      </div>
    );
  }
}
export default App;
