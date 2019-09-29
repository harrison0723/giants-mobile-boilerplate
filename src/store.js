import { applyMiddleware, compose, createStore } from 'redux'
import { getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import firebase from './firebase'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

export const configureStore = (preloadedState) => {
    const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })]
    const middlewareEnhaner = applyMiddleware(...middlewares)

    const storeEnhancers = [middlewareEnhaner]

    const composedEnhancer = compose(...storeEnhancers, reduxFirestore(firebase))

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    )

    return store
}