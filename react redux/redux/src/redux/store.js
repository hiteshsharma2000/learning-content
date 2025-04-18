import {legacy_createStore} from 'redux'
import { countreducer } from './reducer'

// export const store=legacy_createStore(countreducer,{count:0})
export const store=legacy_createStore(countreducer,{count:0})