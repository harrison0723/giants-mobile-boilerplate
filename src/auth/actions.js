import { loggingIn, loggedIn, showError } from '../common/tools/auth'

export const checkAuthState = (navigation) => {
    return async (dispatch, getState, { getFirebase }) => {
        try {
            console.ignoredYellowBox = ['Setting a timer'] // Ref: https://github.com/facebook/react-native/issues/12981
            await getFirebase().auth().onAuthStateChanged(function (user) {
                if (user) navigation.navigate('Home')
                else navigation.navigate('Auth')
            })
        } catch (error) {
            console.warn(error)
        }
    }
}

export const login = (creds, navigation) => {
    return async (dispatch, getState, { getFirebase }) => {
        try {
            dispatch(loggingIn())
            await getFirebase().auth().signInWithEmailAndPassword(creds.email, creds.password)
            dispatch(loggedIn())
            navigation.navigate('Home')
        } catch (error) {
            dispatch(showError(error))
        }
    }
}