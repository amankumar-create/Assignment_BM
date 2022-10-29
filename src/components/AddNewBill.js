import {TextField, Button} from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../Store/actions";
import "../styles.css";

const AddNewBill = (props) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();

  if (!props.showAddBill) return;
  return (
    <>
      <div className="dark-bg"  >
      <div className="centered">
        <div className="modal">
          <TextField
            required={true}
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            required={true}
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextField
            required={true}
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <TextField
            required={true}
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div style={{display:'flex', justifyContent:'space-around'}}>
          <Button
            onClick={() => {
              props.addBill({
                id: Math.floor(Math.random() * 100),
                description: description,
                category: category,
                amount: amount,
                date: date,
              });
              props.toggleAddBill();
            }}
          >
            Add
          </Button>
          <Button
            onClick={() => {
              props.toggleAddBill();
            }}
          >
            Cancel
          </Button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default connect(null, actions)(AddNewBill);
