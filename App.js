import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppLoading, Icon } from 'expo'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import AppNavigator from './src/navigation'
import firebase from './src/firebase'
import { configureStore } from './src/store'

const store = configureStore()

const reactReduxFirebaseProps = { 
    firebase, 
    config: { enableLogging: true  },
    dispatch: store.dispatch,
    createFirestoreInstance 
}

export default class App extends React.Component {
    state = {
        isLoadingComplete: false
    }

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            )
        } else {
            return (
                <Provider store={store}>
                    <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
                        <View style={styles.container}>
                            <AppNavigator />
                        </View>
                    </ReactReduxFirebaseProvider>
                </Provider>
            )
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            // Asset.loadAsync([
            //     require('./assets/path/to/image')
            // ]),
            // Font.loadAsync({
            //     // Import Ionicons
            //     ...Icon.Ionicons.font,
            //     // Import custom font
            //     'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
            // }),
        ])
    }

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error)
    }

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
