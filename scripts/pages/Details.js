import React from 'react';

export default class Details extends React.Component{
    contructor(){

    }
    render(){
        return (
            <div class="details-container">
                <h1 class="details-title">{this.props.title}</h1>
                <div class="details-body">{this.props.body}</div>
            </div>
        );
    }
}