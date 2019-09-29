import React from 'react'
import { connect } from 'react-redux'
import { View, StatusBar, Text } from 'react-native'
import Button from '../common/components/button'
import styles from './modal-page.styles'

export class ModalPageScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const { page } = this.props

        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <Text style={styles.title}>{page.title}</Text>
                <Text>{page.content}</Text>
                <View style={styles.closeButton}>
                    <Button 
                        onPress={() => this.props.navigation.goBack(null)}
                        textStyle={{ color: 'indianred' }}
                        type="white" size="normal">
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