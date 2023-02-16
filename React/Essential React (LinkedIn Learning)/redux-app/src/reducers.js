import {CREATE_TODO, REMOVE_TODO} from './actions'

export const todos = (state, action) => {
    const {type, payload} = action
    
    switch (type) {
        case CREATE_TODO: {
            const {text} = payload
            const newTodo = {
                
            }
            
        }
        case REMOVE_TODO: {

            break
        }
        default: {
            return state            
        }
    }
}