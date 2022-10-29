export default  (state = new Map(), action)=>{
    const updatePayableBills= ()=>{
        return action.payload;
    }
    switch(action.type){
        case 'updatePayableBills':
            return updatePayableBills();
        default:
            break;
    }
    return state;
}