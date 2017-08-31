import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Users} from './components/users'
import {NewUser} from './containers/connect_adduser'
import {Calcul} from './components/calcul'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      countUsers:0
    }
    this.setCount = this.setCount.bind(this)
  }
  setCount(){
    this.setState({
      countUsers:this.props.users.length
    })
  }
  render() {
    let users  = this.props.users
    return (
      <div className="App container">
        <section className="users">
          <h1>Users</h1>
          <hr/>
          <div className="row head">
            <div className="col-md-3">Name</div>
            <div className="col-md-3">Email</div>
            <div className="col-md-3">Phone</div>
            <div className="col-md-3">Work place</div>
            <hr/>
          </div>   
          {
            users.map((item,index)=>{
            return <Users person={item} key={index}/>
          })
          }
          <button>get users</button>
        </section>
        <NewUser/>
        <Calcul/>
      </div>
    );
  }
}

const mapStateToProps = function (state){ 
    return {
        users:state.users
    }
}

export default connect(mapStateToProps)(App);
