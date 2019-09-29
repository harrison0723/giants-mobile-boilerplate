import { loadUser, loadedUser, authError } from './reducer'

export const checkAuthState = (navigation) => {
    return async (dispatch, getState, { getFirebase }) => {
        try {
            await getFirebase()
                .auth()
                .onAuthStateChanged(user => {
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
            dispatch(loadUser())

            await getFirebase()
                .auth()
                .setPersistence('local')

            await getFirebase()
                .auth()
                .signInWithEmailAndPassword(creds.email, creds.password)

            dispatch(loadedUser())

            navigation.navigate('Home')

        } catch (error) {
            dispatch(authError(error))
        }
    }
}