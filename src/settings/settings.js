import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { WebBrowser } from 'expo'
import { signout } from './actions'
import styles from './settings.styles'
import { H4, Button } from 'nachos-ui'

export class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    }

    handleLearnMorePress = () => {
        WebBrowser.openBrowserAsync('https://github.com/harrison0723/giants-boilerplate')
    }

    render() {
        const { email, signout, navigation } = this.props

        return (
            <View style={styles.container}>
                <View style={styles.circle} />
                <View style={styles.email}>
                    <H4>{email}</H4>
                </View>
                <View style={styles.button}>
                    <Button onPress={this.handleLearnMorePress}>GitHub page</Button>
                </View>
                <View style={styles.button}>
                    <Button type='danger' onPress={() => signout(navigation)}>Sign out</Button>
                </View>
            </View>
        ) 
    }
}

const mapState = state => ({
    email: state.firebase.auth.email
})

const actions = { signout }

export default connect(mapState, actions)(SettingsScreen)