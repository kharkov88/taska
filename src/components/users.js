import React, { Component } from 'react';

export class Users extends Component {

  render() {
      let check;
      return(
        <div className="row">
          <div className="col-md-2">{this.props.person.name}</div>
          <div className="col-md-3">{this.props.person.email}</div>
          <div className="col-md-3">{this.props.person.phone}</div>
          <div className="col-md-3">{this.props.person.job}</div>
          <div className="col-md-1"><button className="btn btn-danger btn-sm" onClick={()=>{
            this.props.delete(this.props.person.id)
            }}>delete user</button>
          </div>
          <hr/>
        </div>
      )
  }
}