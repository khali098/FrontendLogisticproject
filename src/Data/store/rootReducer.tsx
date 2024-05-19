import {combineReducers} from '@reduxjs/toolkit'
import {reducer as exampleReducer} from "../slices/example"
import {reducer as authReducer} from "../slices/auth"
import {reducer as createReducer} from "../slices/auth"
import {reducer as productsReducer} from "../slices/Products"





const rootReducer=combineReducers({
    example:exampleReducer,
    auth:authReducer,
    create:createReducer,
    products:productsReducer
})

export default rootReducer