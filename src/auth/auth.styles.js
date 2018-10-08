import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    authContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    error: {
        height: 40,
    },
    errorText: {
        textAlign: 'center',
        color: '#cc3300'
    }
})