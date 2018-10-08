import React from 'react'
import { connect } from 'react-redux'
import { View, StatusBar } from 'react-native'
import styles from './modal-page.styles'
import { H1, P, Button } from 'nachos-ui'

export class ModalPageScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const { page } = this.props

        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <H1>{page.title}</H1>
                <P>{page.content}</P>
                <View style={styles.closeButton}>
                    <Button onPress={() => this.props.navigation.goBack(null)}>
                        Exit Fullscreen
                    </Button>
                </View>
            </View>
        )
    }
}

const mapState = state => ({
    page: state.firestore.data.page
})

export default connect(mapState, null)(ModalPageScreen)