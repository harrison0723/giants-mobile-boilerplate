import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, isLoaded } from 'react-redux-firebase'
import { Platform } from 'react-native'
import { TouchableOpacity, View } from 'react-native'
import { Icon } from 'expo'
import styles from './nested-page.styles'
import { Button, H1, P } from 'nachos-ui'

export class NestedPageScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack(null)}>
                    <Icon.Ionicons
                        name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                        size={26}
                        style={{ marginLeft: 15, width: 30 }}
                        color="black"
                    />
                </TouchableOpacity>
            )
        }
    }

    openModalPage = () => {
        this.props.navigation.navigate('ModalPage')
    }

    render() {
        const { page } = this.props

        if (isLoaded(page)) {
            return (
                <View style={styles.container}>
                    <H1>{page.title}</H1>
                    <P>{page.content}</P>
                    <View style={styles.button}>
                        <Button onPress={this.openModalPage}>Fullscreen Mode</Button>
                    </View>
                </View>
            )
        } else return <View />
    }
}

const mapState = state => ({
    uid: state.firebase.auth.uid,
    page: state.firestore.data.page
})

const query = props => [{
    collection: 'users',
    doc: props.uid,
    subcollections: [{
        collection: 'pages',
        doc: props.navigation.getParam('pageId')
    }],
    storeAs: 'page'
}]

export default connect(mapState, null)(firestoreConnect(query)(NestedPageScreen))