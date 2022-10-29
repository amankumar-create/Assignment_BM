import { connect } from "react-redux";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import * as actions from "../Store/actions";
const MonthlyBudget = (props) => {
  const [editing, setEditing] = useState(false);
  const [fieldValue, setFieldValue] = useState(props.monthlyBudget);
  const save = () => {
    props.updateBudget(fieldValue);
    setEditing(!editing);
  };
  const budgetElement = editing ? (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center"}}>
      <TextField
        value={fieldValue}
        type="number"
        onChange={(e) => setFieldValue(e.target.value)}
      />
      <Button onClick={save}>Done</Button>
    </div>
  ) : (
    <>
      <h1 style={{marginLeft:"10px", color:"#1da341"}}>{props.monthlyBudget}</h1>
      <Button
        onClick={() => {
          setEditing(!editing);
        }}
      >
        Edit
      </Button>
    </>
  );
  return (
    <div style={{ display: "flex" , alignItems:"center"}}>
      <h1>{"Your monthly budget: "}</h1>
      {budgetElement}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    monthlyBudget: state.monthlyBudget,
  };
};
export default connect(mapStateToProps, actions)(MonthlyBudget);
