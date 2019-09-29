import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, isLoaded } from 'react-redux-firebase'
import { ScrollView, FlatList, TouchableOpacity, View, Text } from 'react-native'
import Logo from './modules/logo'
import styles from './home.styles'

export class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const { pages } = this.props

        if (isLoaded(pages)) {
            return (
                <View style={styles.container}>
                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <Logo />
                        <FlatList
                            data={pages}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => this.openNestedPage(item.id)}>
                                        <View style={styles.block}>
                                            <Text>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </ScrollView>
                </View>
            )
        } else return <View />
    }

    openNestedPage = (pageId) => {
        this.props.navigation.navigate('NestedPage', { pageId })
    }
}

const mapState = state => ({
    uid: state.firebase.auth.uid,
    pages: state.firestore.ordered.pages
})

const query = props => [{
    collection: 'users',
    doc: props.uid,
    subcollections: [{
        collection: 'pages'
    }],
    storeAs: 'pages'
}]

export default connect(mapState, null)(firestoreConnect(query)(HomeScreen))
