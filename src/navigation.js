import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import TabBarIcon from './common/components/icon'
import AuthScreen from './auth/auth'
import AuthLoadingScreen from './auth/modules/loading'
import HomeScreen from './home/home'
import PageScreen from './page/page'
import NestedPageScreen from './nested-page/nested-page'
import ModalPageScreen from './modal-page/modal-page'
import SettingsScreen from './settings/settings'

const AuthStack = createStackNavigator({ Auth: AuthScreen })
const PageStack = createStackNavigator({ Page: PageScreen })
const ModalPageStack = createStackNavigator({ ModalPage: ModalPageScreen })
const HomeStack = createStackNavigator({ Home: HomeScreen, NestedPage: NestedPageScreen })
const SettingsStack = createStackNavigator({ Settings: SettingsScreen })

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name='file'
        />
    )
}

PageStack.navigationOptions = {
    tabBarLabel: 'Page',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name='activity'
        />
    )
}

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name='user'
        />
    )
}

const MainTabNavigator = createBottomTabNavigator({
    HomeStack,
    PageStack,
    SettingsStack
})

const RootNavigator = createStackNavigator({
    Main: MainTabNavigator,
    ModalPage: ModalPageStack
}, {
    mode: 'modal',
    headerMode: 'none'
})

const RootSwitchNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    Root: RootNavigator
}, {
    initialRouteName: 'AuthLoading'
})

const App = createAppContainer(RootSwitchNavigator)

export default App