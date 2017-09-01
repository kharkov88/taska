import React, { Component } from 'react';
import {Users,Adding,Calculate} from './components'
import './App.css'

class App extends Component {
  render() {
    let {users,actions,convert,fetching}  = this.props
    let visible = fetching?'block':'none'
    return (
      <div className="App container">
        <Users actions={actions} users={users}  convert={convert}/>
        <Adding adding={actions.addUser}/>
        <Calculate convert={actions.convert} convertValue={convert}/>
        <div className="loader"style={{display:visible}}>
          <img src="img/25.gif" alt="loader"/>  
        </div>
      </div>
    );
  }
}
export default App;
