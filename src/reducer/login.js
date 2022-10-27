import { FAILURE, LOADING, SUCCESS } from "../action/type";
const initialState = {};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING: {
            return { ...state, loginSuccess: false };
        }
        case SUCCESS: {
            console.log(action);
            window.localStorage.setItem(
                "token",
                action.payload["access_token"]
            );
            return { ...state, loginSuccess: action.payload };
        }
        case FAILURE: {
            return { ...state, loginSuccess: false };
        }
        default:
            return state;
    }
};
export default reducer;
