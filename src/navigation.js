import React from 'react'
import { Platform } from 'react-native'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import TabBarIcon from './common/components/icon'
import AuthScreen from './auth/auth'
import AuthLoadingScreen from './auth/auth-loading'
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
            name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
        />
    )
}

PageStack.navigationOptions = {
    tabBarLabel: 'Page',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-cube' : 'md-cube'}
        />
    )
}

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
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

export default createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    Root: RootNavigator
}, { initialRouteName: 'AuthLoading' })