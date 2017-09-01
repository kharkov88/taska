import React, { Component } from 'react';

export class AddUser extends Component {
    render(){
        let name,email,phone,job;
        return(
            <section className="add">
            <form>
                <h1>Adding user</h1>
                <hr/>
                <label >Name</label>
                <input ref={input=>name=input} className="form-control" placeholder="Name" type="text"/><br/>
                <label>Email address</label>
                <input ref={input=>email=input} className="form-control" placeholder="Email" type="text"/><br/>   
                <label>Phone</label>
                <input ref={input=>phone=input} className="form-control" placeholder="Phone" type="text"/><br/>
                <label>Place of work</label>
                <input ref={input=>job=input} className="form-control" placeholder="Company" type="text"/><br/>
                <label style={{color:'red'}}> * Name, email and phone are required</label><br/>
                <button className="btn btn-info btn-sm" onClick={(e)=>{
                    e.preventDefault();
                    if(name.value.trim()!=0&&email.value.trim()!=0&&phone.value.trim()!=0){
                    this.props.adding({
                                name:name.value,
                                email:email.value,
                                phone:phone.value,
                                job:job.value
                                });
                    name.value=email.value=phone.value=job.value='';
                    }
                    }}>Add user</button>
            </form>
            </section>
        )

    }
}
