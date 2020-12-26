import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function
const reducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        people: [...state.people, action.payload],
        isModalOpen: true,
        modalContent: 'item added',
      }
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
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}
const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newItem = {
        id: new Date().getTime().toString(),
        name,
      }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
