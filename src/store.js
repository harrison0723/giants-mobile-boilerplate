import { applyMiddleware, compose, createStore } from 'redux'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import firebaseConfig from './firebase'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const reactReduxFirebaseConfig = {
    enableRedirectHandling: false
}

export const configureStore = (preloadedState) => {
    const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })]
    const middlewareEnhaner = applyMiddleware(...middlewares)

    const storeEnhancers = [middlewareEnhaner]

    const composedEnhancer = compose(
        ...storeEnhancers, 
        reactReduxFirebase(firebaseConfig, reactReduxFirebaseConfig),
        reduxFirestore(firebaseConfig)
    )

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    )

    return store
}