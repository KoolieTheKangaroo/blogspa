import React from 'react';
import ReactDOM from 'react-dom';

//import Details from './Details';

export default class Overview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            state: 'initial',
            config: {}
        };
        this.config = {};
        props.postsPromise.then((body)=>{
            this.config = JSON.parse(body[0]);
            console.log("this config is a ", typeof(this.config), this.config);
            this.setState = {
                config: Array.from(this.config, item => item.post)
            }
            console.log("state of the nation: ", this.state);
        });
        
    }
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps: ", nextProps);
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate: ", this.state, this.props, nextState, nextProps);
        return true;
    }

    componentWillMount(){
        console.log("componentWillMount:", this.state);
    }

    componentDidMount(){
        console.log("componentDidMount:", this.state);
    }

    componentWillUpdate(){
        console.log("componentWillMount:", this.state);
    }

    componentDidUpdate(){
        console.log("componentDidUpdate:", this.state);
    }
    
    

    render(){
        // early escape if promise not resolved:
        if (Object.keys(this.state.config).length === 0) {
            return null;
        }

        console.log("YAY Promise Resolved (as promised)", this.config);
        console.log(this.state);

        return(
            <div>
                <Post title={"Title"} body={"body"}/>
            </div>
        );
    }
}

