import {reducer} from './reducer'
import { createStore } from 'redux'
// import { createStore, applyMiddleware } from 'redux'

// import thunk from 'redux-thunk'

// export const store = createStore(reducer,applyMiddleware(thunk))

export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())