const initialState = {
    isLoggedIn: false
}


export function authenticationReducer(state = initialState, action) {

    switch (action.type) {
        case "login":
            return {
                isLoggedIn: !state.isLoggedIn
            }

        default: return state;
    }


}