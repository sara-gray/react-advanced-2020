export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        people: [...state.people, action.payload],
        isModalOpen: true,
        modalContent: 'item added',
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        people: state.people.filter((person) => person.id !== action.payload),
        isModalOpen: true,
        modalContent: 'Item removed',
      }
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false }
    case 'NO_VALUE':
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'please enter a value',
      }
    default:
      throw new Error('no matching action type in reducer')
  }
}
