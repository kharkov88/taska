import React, { Component } from 'react';

export class Users extends Component {
  render() {
      return(
        <div className="row">
          <div className="col-md-3">{this.props.person.name}</div>
          <div className="col-md-3">{this.props.person.email}</div>
          <div className="col-md-3">{this.props.person.phone}</div>
          <div className="col-md-3">{this.props.person.job}</div>
          <hr/>
        </div>
      )
  }
}