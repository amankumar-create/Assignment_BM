const jsonObj = {
  bills: [
    {
      id: 1,
      description: "Dominoes",
      category: "FoodNDining",
      amount: "430",
      date: "01-02-2020",
    },
    {
      id: 2,
      description: "Car wash",
      category: "utility",
      amount: "500",
      date: "01-06-2020",
    },
    {
      id: 3,
      description: "Amazon",
      category: "shopping",
      amount: "2030",
      date: "01-07-2020",
    },
    {
      id: 4,
      description: "House rent",
      category: "Food & Dining",
      amount: "35900",
      date: "01-03-2020",
    },
    {
      id: 5,
      description: "Tuition",
      category: "education",
      amount: "2200",
      date: "01-12-2020",
    },
    {
      id: 6,
      description: "Laundry",
      category: "Personal Care",
      amount: "320",
      date: "01-14-2020",
    },
    {
      id: 7,
      description: "Vacation",
      category: "Travel",
      amount: "3430",
      date: "01-18-2020",
    },
  ],
};

const bills = JSON.parse(JSON.stringify(jsonObj));
export default (state = bills.bills, action) => {
  var newList;
  const deleteBill = (id) => {
    ////console.log(state);
    newList = state.filter((bill) => {
      return bill.id !== id;
    });
    return newList;
  };
  const editBill = (id, updatedBill) => {
    newList = state.map((bill) => bill);
    newList.forEach((bill) => {
      if (id === bill.id) {
        bill.description = updatedBill.description;
        bill.category = updatedBill.category;
        bill.amount = updatedBill.amount;
      }
    });
    return newList;
  };

  const addBill = (bill) => {
    ////console.log("addbill called");
    newList = state.map((bill) => bill);
    newList.push(bill);
    ////console.log(newList);
    return newList;
  };
  switch (action.type) {
    case "delete":
      return deleteBill(action.id);

    case "edit":
      return editBill(action.id, action.updatedBill);

    case "add":
      return addBill(action.payload);
    default:
      break;
  }
  return state;
};
