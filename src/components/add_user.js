import React, { Component } from 'react';

export class AddUser extends Component {
    render(){
        let name,email,phone,job;
        return(
            <section className="add">
            <form>
                <h1>Users</h1>
                <hr/>
                <label >Name</label>
                <input ref={input=>name=input} className="form-control" placeholder="Name" type="text"/><br/>
                <label>Email address</label>
                <input ref={input=>email=input} className="form-control" placeholder="Email" type="text"/><br/>   
                <label>Phone</label>
                <input ref={input=>phone=input} className="form-control" placeholder="Phone" type="text"/><br/>
                <label>Place of work</label>
                <input ref={input=>job=input} className="form-control" placeholder="Company" type="text"/><br/>
                <button className="btn btn-info btn-sm" onClick={(e)=>{
                    e.preventDefault();
                    this.props.actions.addUser({
                                name:name.value,
                                email:email.value,
                                phone:phone.value,
                                job:job.value
                                });
                    }}>Add user</button>
            </form>
            </section>
        )

    }
}
