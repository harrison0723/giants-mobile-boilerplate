import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { signout } from './actions'
import Button from '../common/components/button'
import styles from './settings.styles'

export class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    }

    render() {
        const { email, signout, navigation } = this.props

        return (
            <View style={styles.container}>
                <View style={styles.circle} />
                <View style={styles.email}>
                    <Text>{email}</Text>
                </View>
                <View style={styles.button}>
                    <Button 
                        onPress={() => signout(navigation)}
                        textStyle={{ color: 'indianred' }}
                        type="white" size="normal">
                        Sign out
                    </Button>
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