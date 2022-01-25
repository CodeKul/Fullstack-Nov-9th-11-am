const initialState = {
    count: 0,
    incBy: 1
}



export const countReducer = (state = initialState, action)=> {

    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + state.incBy, incBy: state.incBy }
            break;
        case "decrement":
                return { ...state, count: state.count - state.incBy, incBy: state.incBy }
                break;
        case "reset":
            return { ...state, count: 0, incBy:0 }
            break;

        case "update":
            return { ...state, count: state.count, incBy: action.payload }
            break;


        default:
            return {count: state.count };
    }

}