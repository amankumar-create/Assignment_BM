import React from "react";
import Bills from "./components/Bills";
import AddNewBill from "./components/AddNewBill";
import Button from "@mui/material/Button";
import { useState } from "react";
import { MenuItem, Select, InputLabel, TextField } from "@mui/material";
import { connect } from "react-redux";
import TimeSeriesChart from "./components/TimeSeriesChart";
import MonthlyBudget from "./components/MonthlyBudget";

const App = (props) => {
  const [showAddBill, setShowAddBill] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("None");
  const toggleAddBill = () => {
    setShowAddBill(!showAddBill);
  };
  ////console.log(props.monthlyBudget);
  return (
    <div>
      <div className="bills-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "10px",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "3px",
          }}
        >
          <MonthlyBudget/>
          <div>
          <InputLabel>Category Filter</InputLabel>
          <Select
            labelId="category-filter-label"
            id="category-filter"
            value={categoryFilter}
            label="Category Filter"
            onChange={(e) => {
              setCategoryFilter(e.target.value);
            }}
          >
            {getCategoriesListOptions(props.bills)}
          </Select>
          </div>
        </div>
        <Bills filter={categoryFilter} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="contained" color="success" onClick={toggleAddBill}>
            Add New Bill
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h3 style={{width:"30vw", height:"50vh", border:"solid 2px", borderRadius:"5px" ,padding:"10px"}}>{`Minimum number of bills you should to pay is ${props.payableBills.size}, and they are highlighted with yellow`}</h3>
        <TimeSeriesChart />
      </div>
      <AddNewBill
        showAddBill={showAddBill}
        toggleAddBill={toggleAddBill}
      ></AddNewBill>
    </div>
  );
};

const getCategoriesListOptions = (bills) => {
  const categoryList = ["None"];
  bills.forEach((bill) => {
    categoryList.push(bill.category);
  });
  const categorySet = new Set(categoryList);
  const menuOptions = [];
  categorySet.forEach((category) => {
    menuOptions.push(<MenuItem value={category}>{category}</MenuItem>);
  });
  return menuOptions;
};

const mapStateToProps = (state) => {
  return { 
    bills: state.bills, 
    monthlyBudget: state.monthlyBudget ,
    payableBills:state.payableBills
  };
};
export default connect(mapStateToProps, null)(App);
