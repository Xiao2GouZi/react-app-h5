

// export const actionDownloadData = createAction("HOME_LOADING");
import { Dispatch } from 'redux'
import { push } from 'react-router-redux';



export const actionDownloadData = () => {
    console.log('actionDownloadData')
    return (dispatch: Dispatch) => {
        dispatch(push('/home'))
    }
};