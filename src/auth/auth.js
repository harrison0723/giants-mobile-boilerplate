import React from 'react'
import { connect } from 'react-redux'
import { login } from './tools/actions'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native'
import Button from '../common/components/button'
import styles from './auth.styles'

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
                        </View>
                    }
                    <TextInput
                        onChangeText={(email) => this.setState({ email })}
                        style={styles.input}
                        value={email}
                        disabled={auth.loading}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        onChangeText={(password) => this.setState({ password })}
                        style={styles.input}
                        value={password}
                        disabled={auth.loading}
                        secureTextEntry={true}
                        placeholder="Password"
                        underlineColorAndroid="transparent"
                    />
                    <Button
                        onPress={() => login({ email, password }, navigation)}
                        disabled={auth.loading}
                        type="white" size="normal">
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