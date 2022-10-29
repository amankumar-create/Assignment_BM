export const deleteBill = (id)=>{
    return {
        type:'delete',
        id:id
    }
}

export const editBill = (id, updatedBill)=>{
    return {
        type:'edit',
        id:id,
        updatedBill:updatedBill
    }
}
export const addBill = (bill)=>{
    return {
        type:'add',
        payload:bill
    }
}
export const updateBudget = (amount)=>{
    return {
        type:'updateBudget',
        payload:amount
    }
}
export const updatePayableBills = (amount)=>{
    return {
        type:'updatePayableBills',
        payload:amount
    }
}