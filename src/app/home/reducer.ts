import { Map } from 'immutable'
import { handleActions } from 'redux-actions';

const initialState:Map<string, any> = Map({
    loading: false,
});

const HomeReducer = handleActions<Map<string, any>>({
    'HOME_LOADING': (state, action:any) => {
        return state.set('loading', action.payload)
    },

}, initialState);

export default HomeReducer
