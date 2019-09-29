import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        padding: 10,
        paddingTop: 40,
    },
    block: {
        width: Dimensions.get('window').width - 40,
        height: 50,
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: '#ddd',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})