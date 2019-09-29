const initialState = {
    loading: false,
    error: ''
}

export const loadUser = () => ({ type: 'LOAD_AUTH' })
export const loadedUser = () => ({ type: 'LOADED_AUTH' })
export const authError = (error) => ({ type: 'AUTH_ERROR', error })

export default function (state = initialState, action) {
    
    const newState = data => Object.assign({}, state, data)

    switch (action.type) {
        case 'LOAD_AUTH':
            return newState({
                error: '',
                loading: true
            })
        case 'LOADED_AUTH':
            return newState({
                loading: false
            })
        case 'AUTH_ERROR':
            return newState({
                error: action.error,
                loading: false
            })
        default:
            return state
    }
}