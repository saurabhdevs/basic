import React from 'react';
import ReactDOM from 'react-dom';
import {Router ,Route , BrowserHistory} from 'react-router';

const App =() =>{
    <h2>App component</h2>
}

const About =() =>{
    <h2>About Us</h2>
}

ReactDOM.render(
<Router history={BrowserHistory}>
<Route path="" component={App}/>
<Route path="/about" component={About}/>
</Router>
, 
document.getElementById('root'))
