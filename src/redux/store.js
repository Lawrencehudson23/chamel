import  rootReducer  from './rootReducer'
import { createStore } from 'redux'
import {persistStore} from 'redux-persist';
export const store = createStore(rootReducer)

export const persistor= persistStore(store)
export default {store,persistStore};