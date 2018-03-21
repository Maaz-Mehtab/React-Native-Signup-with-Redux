const INITIAL_STATE = {
    authUser: {},
    isAuthenticated: false,
    isProcessing: false,
    isRegistered: false,
    isError: false, 
    errorMessage: {},
    currentUser:'',
    users: [],
    all_message:[],
    message_send:[],
    update_message:[],
    todo:[]
    

}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD":
        return {
            ...state,
            todo: action.payload
        }
    case "CURRENTUSER":
        return ({
            ...state,
            currentUser: action.payload,isError:false
        }) 
        case "REGISTER_FAIL":
            return ({ ...state, errorMessage: action.payload, isProcessing: false, isError: true })  
    case "ALLUSERS":
        return ({
            ...state,
            users: action.payload
        })
        default:
            return state;
    }

}