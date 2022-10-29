import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../Store/actions";
import { Button } from "@mui/material";
import EditBill from "./EditBill";
import "../styles.css";

const BillElement = (props) => {
  const [editing, setEditing] = useState(false);
  const { id, description, category, amount, date } = props.bill;
  const toggleEditing = () => {
    setEditing(!editing);
  };
  ////console.log(props.payableBills);
  return (
    <div className="billElement" style={props.payableBills.has(id)?{backgroundColor:"yellow"}:null}>
      <div style={{display:'flex', flexDirection: "row", justifyContent:'space-between' }}>
        <h3 >{description}</h3>
        <h4 >{amount}</h4>
      </div>
      <p  >{category}</p>
      <p >{date}</p>
      <Button variant="text" onClick={() => props.deleteBill(id)}>
        Delete
      </Button>
      <Button variant="text" onClick={toggleEditing}>
        Edit
      </Button>
      {editing ? (
        <EditBill id={id} toggleEditing={toggleEditing}></EditBill>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    payableBills: state.payableBills,
  };
};
export default connect(mapStateToProps, actions)(BillElement);
