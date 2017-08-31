import React, { Component } from 'react';

export class Calcul extends Component {
    render(){
        return(
            <section>
                <h2>Currency calculator</h2>
            <form>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>From:</label>
                            <select className="form-control">
                                <option>USD</option>
                                <option>EUR</option>
                                <option>RUB</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label >To:</label>
                            <select className="form-control">
                                <option>USD</option>
                                <option>EUR</option>
                                <option>RUB</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter value"/>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-info">Calculate</button>
                </div>
                <div className="form-group">
                    <div className="help-block">Result:</div>
                    <div className="help-block"></div>
                </div>
            </form>
            </section>
        )
    }
}