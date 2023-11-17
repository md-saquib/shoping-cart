

export const loginstart = () => {
    return {
        type: 'login-start'
    }
}

export const loginsuccess = (data) => {
    return {
        type: 'login-success',
        payload: data
    }
}

export const loginerror = (message) => {
    return {
        type: 'login-error',
        payload: message
    }
}

export const userlogin = (userinfo) => {
    return (dispatch) => {

        dispatch(loginstart())
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userinfo)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                dispatch(loginsuccess(data))
            })
            .catch((e) => {
                console.log('hello');
                dispatch(loginerror(e.message))
                
            })

    }
}