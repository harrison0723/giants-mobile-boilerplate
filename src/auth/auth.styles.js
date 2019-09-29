import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    authContainer: {
        flex: 1,
        backgroundColor: "#F5FCFF",
        padding: 20
    },
    error: {
        height: 40,
    },
    errorText: {
        textAlign: 'center',
        color: '#cc3300'
    },
    input: {
        backgroundColor: 'white',
        marginBottom: 20,
        padding: 15,
        fontSize: 15
    }
})