import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    button: {
        alignSelf: 'stretch',
        marginVertical: 10
    },
    disabled: {
        opacity: 0.7
    },
    buttonSurface: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    buttonText: {
        fontWeight: '600'
    },
    // Type
    primaryHeight: {
        backgroundColor: '#1581e5'
    },
    primarySurface: {
        backgroundColor: '#1890ff',
        borderColor: '#1581e5'
    },
    primaryText: {
        color: 'white'
    },
    whiteHeight: {
        backgroundColor: '#f1f1f1'
    },
    whiteSurface: {
        backgroundColor: 'white',
        borderColor: '#e9e9e9'
    },
    whiteText: {
        color: '#999'
    },
    // Size
    large: {
        height: 44,
    },
    largeHeight: {
        borderRadius: 22,
    },
    largeSurface: {
        borderRadius: 22
    },
    normal: {
        height: 40
    },
    normalHeight: {
        borderRadius: 20,
    },
    normalSurface: {
        borderRadius: 20,
    }
})