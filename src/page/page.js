import React from 'react'
import { View } from 'react-native'
import styles from './page.styles'

export default class PageScreen extends React.Component {
    static navigationOptions = {
        title: 'Page'
    }

    render() {
        return (
            <View style={styles.container}>
                
            </View>
        )
    }
}
