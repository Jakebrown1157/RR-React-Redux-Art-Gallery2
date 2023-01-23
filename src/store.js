import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './ducks/dataSlice'
import { logger } from './features/middleware'

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [ logger ]
})
