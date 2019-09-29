import React from 'react'
import { Feather } from '@expo/vector-icons'

export default class TabBarIcon extends React.Component {
    render() {
        return (
            <Feather
                name={this.props.name}
                size={26}
                style={{ marginBottom: -3 }}
                color={this.props.focused ? '#2f95dc' : '#ccc'}
            />
        )
    }
}