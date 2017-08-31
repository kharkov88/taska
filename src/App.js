import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Users} from './components/users'
import {NewUser} from './containers/connect_adduser'
import {Calcul} from './components/calcul'
import './App.css'

class App extends Component {
  render() {
    let selValue;
    let {users,actions,convert}  = this.props
    return (
      <div className="App container">
        <section className="users">
          <h1>Users</h1>
          <hr/>
          <div className="row head">
            <div className="col-md-2">Name</div>
            <div className="col-md-3">Email</div>
            <div className="col-md-3">Phone</div>
            <div className="col-md-3">Work place</div>
            <div className="col-md-1"></div>
            <hr/>
          </div>   
          {
            users.map((item,index)=>{
            return <Users person={item} key={index} id={item.id} delete={actions.delUser}/>
          })
          }
          <div id="result_users"></div>
          <label >Server:</label>
          <select className="form-control" ref={select=>selValue=select}>
              <option value="/data/user.json">Local</option>
              <option value="https://jsonplaceholder.typicode.com/users">Web</option>
          </select>
          <br/><br/>
          <button className="btn btn-info btn-sm" onClick={()=>actions.getUsers(selValue.value)}>request</button>
        </section>
        <NewUser/>
        <Calcul convert={actions.convert} convertValue={convert}/>
      </div>
    );
  }
}


export default App;
