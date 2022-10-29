export default (state=40000, action)=>{
    const updateBudget = ()=>{
        return action.payload;
    }
    switch(action.type){
        case "updateBudget":
            return updateBudget();
        default:
            break;
    }
    return state;
}