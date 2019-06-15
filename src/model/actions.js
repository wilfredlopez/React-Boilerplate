
import { action } from 'easy-peasy'

export default {
    decrease: action((state) => {
        state.counter--
    }),
    add: action((state) => {
        state.counter++
    }),
    setTodos: action((state, todos = []) => {
        state.todos = todos
    })
}