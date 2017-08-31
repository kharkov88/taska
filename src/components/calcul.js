import React, { Component } from 'react';

export class Calcul extends Component {
    render(){
    let fromValute,toValute,enter;
        return(
            <section>
                <h2>Currency calculator</h2>
            <form>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>From:</label>
                            <select className="form-control" ref={select=>fromValute=select}>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>RUB</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >To:</label>
                            <select className="form-control" ref={select=>toValute=select}>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>RUB</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter value" ref={input=>enter=input}/>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-info" onClick={(e)=>{
                        e.preventDefault()
                        this.props.convert(fromValute.value,enter.value,toValute.value)}
                        }>Calculate</button>
                </div>
                <div className="form-group">
                    <div className="help-block">Result:</div>
                    <div className="help-block"><b>{this.props.convertValue}</b></div>
                </div>
            </form>
            </section>
        )
    }
}