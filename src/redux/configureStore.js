import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import greetingsReducer from './greetings/greetings'
import { createDevTools } from '@redux-devtools/core'


const rootReducer = combineReducers({
	greetings: greetingsReducer
})

const store = createStore(rootReducer, createDevTools(applyMiddleware(thunk, logger)))
export default store;
