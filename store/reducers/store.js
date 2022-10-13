import {
  LOGOUT,
  LOGIN,

} from '../actions/store';


const defaultState = {
  authenticated: false,
  token: null,
};

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        authenticated: true,
        token: action.token,
      }
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
        token: null,
      }
  }
  return state;
}

export default reducer;

