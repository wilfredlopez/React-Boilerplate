import state from './state'
import actions from './actions'
import thunkActions from './thunkActions'

export default {
    ...state,
    ...actions,
    ...thunkActions
}