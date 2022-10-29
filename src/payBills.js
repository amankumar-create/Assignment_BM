// level 2 solution:
//  to see a minimum number of bills that should be paid (n), such that their
// total value does not exceed the monthly budget value while meeting the condition that no more bills
// can be added from the remaining bills.. Highlight all the bills that should be paid.

export default (billsArray, budget, update) => {
  const bills = [...billsArray];
  bills.sort((bill1, bill2) => {
    return parseInt(bill2.amount) - parseInt(bill1.amount);
  });
  var remainingBudget = budget;
  const payable = new Map();
  for (let i = 0; i < bills.length; ++i) {
    let billAmount = parseInt(bills[i].amount);
    if (remainingBudget >= billAmount) {
      //console.log(remainingBudget, bills[i].amount)
      remainingBudget -= billAmount;
      payable.set(bills[i].id, 1);
      //console.log(bills.description);
    }
  }
  ////console.log(budget);
  update(payable);
};
