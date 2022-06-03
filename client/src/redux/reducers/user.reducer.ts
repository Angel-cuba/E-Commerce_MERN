import {LOGIN_USER, LOGOUT_USER} from '../../types/UserActions'

const authReducer = (state = {authData: null}, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload
      }
    case LOGOUT_USER:
      return {}
    default:
      return state
  }
}

export default authReducer