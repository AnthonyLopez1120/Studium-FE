import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { GET_USER, SET_ERROR, SET_USER_DECKS } from './actions';

const initialState = {
   user: {},
   error: '',
   userDecks: [],
}

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_USER:
         return {
            ...state,
            user: action.payload
         }
      case SET_ERROR:
         return {
            ...state,
            error: action.payload
         }
      case SET_USER_DECKS:
         return {
            ...state,
            userDecks: action.payload
         }
      default:
         return state;
   }
}

const persistConfig = {
   key: 'rootReducer',
   storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)
store.subscribe(() => console.log('THIS IS THE STORE -->', store.getState()))
export { store, persistor }


// export default store