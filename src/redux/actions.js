import AxiosWithAuth from '../utils/axiosWithAuth'

export const GET_USERS = 'GET_USERS'
export const SET_ERROR = 'SET_ERROR'
export const SET_USER_DECKS = "SET_USER_DECKS"

export const getUsers = () => dispatch => {
   AxiosWithAuth()
      .get('/users')
      .then(res => {
         dispatch({ type: GET_USERS, payload: res.data })
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'There was an error retrieving the users' })
      })
}

export const getUserDecks = (user) => dispatch => {
   AxiosWithAuth()
      .get(`/users/${user.id}/decks`)
      .then(res => {
         console.log(res)
         dispatch({ type: SET_USER_DECKS, payload: res.data })
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'There was an error retrieving the user decks' })
      })
}