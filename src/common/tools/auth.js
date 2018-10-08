const LOGGIN_IN = 'LOGGIN_IN'
const LOGGED_IN = 'LOGGED_IN'
const SHOW_ERROR = 'SHOW_ERROR'

const initialState = {
    loading: false,
    error: {}
}

export const loggingIn = () => ({ type: LOGGIN_IN })
export const loggedIn = () => ({ type: LOGGED_IN })
export const showError = (error) => ({ type: SHOW_ERROR, error })

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGGIN_IN:
            return Object.assign({}, state, {
                loading: true,
                error: {}
            })
        case LOGGED_IN:
            return Object.assign({}, state, {
                loading: false
            })
        case SHOW_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error
            })
        default:
            return state
    }
}