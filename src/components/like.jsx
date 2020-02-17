import React, { Component } from 'react';

class Like extends Component {
    render() {
        const classNames = this.props.liked? 'fa fa-heart': 'fa fa-heart-o';
        return (

            <i className={classNames} aria-hidden="true" style={{cursor: 'pointer'}}onClick={this.props.onClick}></i>
        );
    }
}

export default Like;