import React from 'react'
import { connect } from 'react-redux'
import { login } from './actions'
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import styles from './auth.styles'
import { Input, Button } from 'nachos-ui'

export class AuthScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    }

    state = {
        email: '',
        password: ''
    }

    render() {
        const { email, password } = this.state
        const { auth, login, navigation } = this.props

        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView style={styles.authContainer} behavior="padding" enabled>
                    {!!auth.error['message'] && 
                        <View style={styles.error}>
                            <Text style={styles.errorText}>
                                {auth.error.message}
                            </Text>
                        </View>}
                    <Input
                        style={{ marginBottom: 20 }}
                        disabled={auth.loading}
                        placeholder="Email"
                        keyboardType={"email-address"}
                        value={email}
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <Input
                        style={{ marginBottom: 20 }}
                        disabled={auth.loading}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <Button 
                        type='primary' 
                        disabled={auth.loading}
                        onPress={() => login({ email, password }, navigation)}>
                        Login
                    </Button>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        )
    }
}

const mapState = state => ({
    auth: state.auth
})

const actions = { login }

export default connect(mapState, actions)(AuthScreen)