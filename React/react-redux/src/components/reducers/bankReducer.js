
const initialState = {
    balance: 0,
    isSavings: true
}


export function bankReducer(state = initialState, action) {


    switch (action.type) {
        case "deposit":
            return {
                balance: state.balance + action.payload,
                isSavings: state.isSavings
            }
            break;

        case "withdraw":
            return {
                balance: state.balance - action.payload,
                isSavings: state.isSavings
            }
            break;

        case "interest":
            return {
                balance: state.balance * 1.24,
                isSavings: state.isSavings
            }
            break;


        case "delete-acct":
            return {
                balance: 0,
                isSavings: state.isSavings
            }
            break;


        case "change-acct":
            return {
                balance: state.balance,
                isSavings: state.isSavings
            }
            break;

        default:
            return state;
    }

}