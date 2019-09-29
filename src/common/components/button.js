import React from 'react'
import { View, TouchableWithoutFeedback, Animated, Text, ActivityIndicator } from 'react-native'
import styles from './button.styles'

class Button extends React.Component {
    state = {
        animation: new Animated.Value(0)
    }

    componentDidMount() {
        if (this.props.disabled || this.props.loading) this.onPressIn()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.disabled !== this.props.disabled) {
            if (this.props.disabled) this.onPressIn()
            else this.onPressOut()
        }
        if (prevProps.loading !== this.props.loading) {
            if (this.props.loading) this.onPressIn()
            else this.onPressOut()
        }
    }

    onPressIn = () => {
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 100
        }).start()
    }
    onPressOut = () => {
        Animated.timing(this.state.animation, {
            toValue: 0,
            duration: 50
        }).start()
    }

    render() {
        const { animation } = this.state
        const { size, type, children, onPress, isIcon, surfaceStyle, textStyle, loading } = this.props
        const disabled = (this.props.disabled || loading) ? 'disabled' : ''

        const buttonHeightStyle = {
            marginTop: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [-6, -3]
            }),
            paddingBottom: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [6, 3]
            })
        }

        return (
            <TouchableWithoutFeedback 
                onPress={disabled ? null : onPress} 
                onPressIn={disabled ? null : this.onPressIn} 
                onPressOut={disabled ? null : this.onPressOut}>
                <View style={[styles.button, styles[disabled], styles[size]]}>
                    <Animated.View style={[styles[`${type}Height`], styles[`${size}Height`], buttonHeightStyle]}>
                        <Animated.View style={[styles.buttonSurface, styles[`${type}Surface`], styles[`${size}Surface`], surfaceStyle]}>
                            {loading ? <ActivityIndicator color="darkgray" /> : isIcon ? children : <Text style={[styles.buttonText, styles[`${type}Text`], textStyle]}>{children}</Text>}
                        </Animated.View>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default Button