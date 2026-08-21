import React, { Component } from 'react';

class ComponentsTopChild extends Component {
    render() {
        let { dataToTopChild } = this.props
        return (
            <div>
                This is TOP CHILD
                <h3>{dataToTopChild}</h3>
            </div>
        );
    }
}

export default ComponentsTopChild;