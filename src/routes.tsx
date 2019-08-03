
import React from 'react';


import { Route, Switch, Router } from "react-router";
import { History } from "history";
import { Msg } from '@kits'



import App from './app/home'
import Home2 from './app/home2'  


const routeConfig = [{
    path: '/',
    exact: true,
    component: App,
}, {
    path: '/home',
    exact: true,
    component: Home2,
}]


interface IProps {
    history: History
}

export default class Index extends React.PureComponent<IProps> {

    componentDidMount() {
        console.log(this.props.history)
        Msg.on('app:route', this.routeAction)
    }

    UNSAFE_componentWillMount() {
        Msg.off("app:route", this.routeAction)
    }

    render() {
        return (
            <Router history={this.props.history}>
                <Switch>
                    {
                        routeConfig.map((item, index) => {
                            return (
                                <Route exact={item.exact} path={item.path} component={item.component} key={`_${index}_1`} />
                            )
                        })
                    }
                </Switch>
            </Router>
        )
    }


    routeAction = ({type, path, state}: {type: string, path: string, state: any}) => {
        if (type === 'push') {
            this.props.history.push(path, state)
        }else if(type === 'replace') {
            this.props.history.replace(path, state)
        }else if(type === 'goBack') {
            this.props.history.goBack()
        }
    }



    

}
