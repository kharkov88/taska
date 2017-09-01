import React, { Component } from 'react';
import {Person} from './person'

export class Users extends Component {
  render() {
    let selValue;
    let {users,actions}  = this.props
    return (
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
            return <Person person={item} key={index} id={item.id} delete={actions.delUser}/>
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
      )
  }
}
