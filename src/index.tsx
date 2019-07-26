import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {createBrowserHistory} from "history";
import { Route, Switch, Router} from "react-router";
import * as serviceWorker from './serviceWorker';

import { Store } from '@ry-redux'
import App from './app/home'
import Home2 from './app/home2'  
import './index.css';
import "lib-flexible"



const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={Store(history)}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/home" component={Home2} />
            </Switch>
        </Router>
    </Provider>
    ,
    document.getElementById("root")
);



// ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();










