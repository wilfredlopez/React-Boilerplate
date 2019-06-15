
import { thunk } from 'easy-peasy'

export default {
    fetchTodos: thunk(async (actions) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        const todos = await res.json()
        actions.setTodos(todos)
    })
}