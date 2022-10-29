import { TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../Store/actions";
import "../styles.css";

const EditBill = (props) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    props.bills.forEach((bill) => {
      if (bill.id === props.id) {
        setDescription(bill.description);
        setCategory(bill.category);
        setAmount(bill.amount);
      }
    });
  }, []);
  return (
    <div>
      <TextField
        label="Description"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ margin: "3px" }}
      />
      <TextField
        label="Category"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ margin: "3px" }}
      />
      <TextField
        label="Amount"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ margin: "3px" }}
      />

      <Button
        onClick={() => {
          props.editBill(props.id, {
            id: props.id,
            description: description,
            category: category,
            amount: amount,
          });
          props.toggleEditing();
        }}
      >
        Done
      </Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    bills: state.bills,
  };
};
export default connect(mapStateToProps, actions)(EditBill);
