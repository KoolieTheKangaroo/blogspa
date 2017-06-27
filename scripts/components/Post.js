import React from 'react';

export default class Post extends React.Component{
    constructor(){

    }
    render(){
        return(
            <div class="post-container">
                <h2 class="post-title">{this.props.title}</h2>
                <div class="post-body">
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    }
}