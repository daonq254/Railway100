import React, { Component } from 'react';

class DemoLifeCycle extends Component {

    constructor(props, context) {
        super(props, context);
        console.log("1. Gọi hàm Contructor");

    }

    componentDidMount() {
        console.log("3. Gọi hàm componentDidMount");

    }
    render() {
        console.log("2. Gọi hàm render");
        return (
            <div>
                <h3>Hello VTI</h3>
            </div>
        );
    }

}

export default DemoLifeCycle;