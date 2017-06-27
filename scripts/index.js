import React from 'react';
import ReactDOM from 'react-dom';
import Details from './pages/Details';
import Overview from './pages/Overview';

//import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'; // for routing
let app = document.querySelector('.app');// the react app element


const request = require('es6-request');
const serverRoot = 'http://jsonplaceholder.typicode.com/';

// es6-request returns a promise
// promises should be resolved in specific classes or in a router class/React.Component:
// let postsRequest = request.get(serverRoot + 'posts'); 
// they (users, posts comments etc.) should also be chained/piped so the app starts when all 
// neccessary data is available

// for now resolve here and get a specific post:
/*let somepost;
request.get(serverRoot + 'posts/1')
    .then((body)=>{ 
        let post = JSON.parse(body[0]);
        ReactDOM.render(<Details title={post.title} body={post.body} />, app);    
    });
*/

// or
// like this:

let postsPromise = request.get(serverRoot + 'posts');
ReactDOM.render(<Overview postsPromise={postsPromise}/>, app);








