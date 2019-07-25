import * as React from 'react'
import './index.less'
import {NavBar} from 'antd-mobile'
import * as Config from '@config'


export default class Index extends React.PureComponent {
    
    componentDidMount() {
        console.log('---->', Config.name)
    }

    render(){
        return(
            <div>
                <NavBar>爱神的箭奥斯卡</NavBar>
                <span>asdasdasdasdasdasd</span>
            </div>
        )
    }

}