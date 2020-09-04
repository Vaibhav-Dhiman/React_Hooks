// it specify the application state changes in responde to certain action
export default (state, action) => {
    switch(action.type) {
        case  'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(trans=> trans.id !== action.payload)
            }
        default :
        return state;
    }
}