import React, { Component } from 'react';

class TVC_ClassComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullName:"Chung Trịnh",
            age:45
        }
    }
    render() {
        return (
            <div>
                <h2>Class Component Demo</h2>
                <h3>State:
                    Fullname: {this.state.fullName} <br/>
                    Age: {this.state.age}
                </h3>
                <h4>
                    props:
                    Company: {this.props.company} <br/>
                    Họ tên: {this.props.hoten}
                </h4>
            </div>
        );
    }
}

export default TVC_ClassComp;