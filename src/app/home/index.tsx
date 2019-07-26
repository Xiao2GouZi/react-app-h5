import * as React from 'react'
import './index.less'
import {NavBar} from 'antd-mobile'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import  * as HomeAction from './action'

interface IHomeProps {
    loading: boolean,
}

interface IHomeActionProps {
    actionDownloadData: typeof HomeAction.actionDownloadData,
}

class Index extends React.PureComponent<IHomeProps & IHomeActionProps> {
    
    render(){
        return(
            <div>
                <NavBar>爱神的箭奥斯卡</NavBar>
                <span onClick={this.haClick.bind(this)}>asdasdasdasdasdasd</span>
            </div>
        )
    }

    haClick() {
        console.log(' ---> ')
        this.props.actionDownloadData()
    }

}


export default  connect(
    (state: any): IHomeProps =>  state.HomeReducer.toJS(),
    (dispatch: any): IHomeActionProps => bindActionCreators(HomeAction, dispatch)
)(Index)