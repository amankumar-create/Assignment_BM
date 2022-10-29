import { combineReducers } from "redux";
import billsReducer from "./billsReducer";
import monthlyBudgetReducer from "./monthlyBudgetReducer";
import payableBillsReducer from "./payableBillsReducer";
const rootReducer = combineReducers({
    bills: billsReducer,
    monthlyBudget: monthlyBudgetReducer,
    payableBills:payableBillsReducer
});
    
export default rootReducer;