import { combineReducers } from 'redux'
import { ADD_USER, START_CALL, STOP_CALL } from './actions'

function user(state = {}, action) {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        user: {
          ...state.user, ...{user: action.user}
        }
      })
    default:
      return state
  }
}

function calls(state = [], action) {
  switch (action.type) {
    case START_CALL:
      return [
        ...state, ...action.call
      ]
    case STOP_CALL:
      return state.map((call, id) => {
        if (id === action.id) {
          return Object.assign({}, call, {
            completed: true, ended_at: new Date()
          })
        }
      })
    default:
      return state
  }
}

const reducer = combineReducers({
  user,
  calls
})

export default reducer