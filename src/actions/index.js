export const addElementToArray = (element) => ({
  type: 'ADD_ELEMENT',
  element: element
})

export const deleteElementFromArray = (element) => ({
  type: 'DELETE_ELEMENT',
  element: element
})

export const setArray = (inputString) => ({
  type: 'SET_ARRAY',
  inputString: inputString
})