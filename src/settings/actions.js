export const signout = (navigation) => {
    return async (dispatch, getState, { getFirebase }) => {
        try {
            await navigation.navigate('Auth')
            getFirebase().auth().signOut()
        } catch (error) {
            console.warn(error)
        }
    }
}