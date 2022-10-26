import { INIT } from "../action/type";

const reducer = (state = { loginData: [] }, action) => {
    switch (action.type) {
        case INIT: {
            console.log(action);
            return { ...state, loginData: action.payload };
        }
        default:
            return state;
    }
};
export default reducer;
