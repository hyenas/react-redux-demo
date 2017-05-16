const initialState = {
  list: []
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return Object.assign({
        list: state.list.concat(action.element)
      })

    case 'DELETE_ELEMENT':
      return Object.assign({
        list: state.list.splice(1)
      })
    case 'SET_ARRAY':
      return Object.assign({
        list: action.inputString.split('')
      })
    default:
      return state
  }
}

export const getList = function(state = initialState){
    return state.todos.list;
}


export default todos
