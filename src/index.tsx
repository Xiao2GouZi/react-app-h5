import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {createBrowserHistory} from "history";
import * as serviceWorker from './serviceWorker';

import { Store } from '@ry-redux'
import './index.less';
import "lib-flexible"
// import '@assets/iconfont/iconfont.css'



import Routes from './routes'


const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={Store(history)}>
        <Routes history={history}/>
    </Provider>
    ,
    document.getElementById("root")
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();










