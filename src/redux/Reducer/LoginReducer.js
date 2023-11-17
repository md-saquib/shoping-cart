


const initialUserInfo = {
    loding: false,
    userinfo: {},
    error: ''
}
export const loginReducer = (state = initialUserInfo, action) => {

    switch (action.type) {

        case 'login-start':
            return { ...state, loding: true }

        case 'login-success':
            return { ...state, loding: false, userinfo: action.payload }

        case 'login-error':
            return { ...state, loding: false, error: action.payload }

        default:
    }

    return state

}
