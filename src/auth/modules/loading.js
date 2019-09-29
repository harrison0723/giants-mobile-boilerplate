import React from 'react'
import { connect } from 'react-redux'
import { checkAuthState } from '../tools/actions'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import styles from '../auth.styles'

export class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props)
        this.props.checkAuthState(this.props.navigation)
    }

    render() {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}

const actions = { checkAuthState }

export default connect(null, actions)(AuthLoadingScreen)