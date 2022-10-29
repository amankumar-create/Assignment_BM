import { useEffect } from "react";
import BillElement from "./BillElement";
import { connect } from "react-redux";
import * as actions from "../Store/actions";
import "../styles.css";
import payBills from "../payBills";
const Bills = (props) => {
  const { bills, monthlyBudget, updatePayableBills } = props;

  useEffect(() => {
    payBills(bills, monthlyBudget, updatePayableBills);
  }, [bills, monthlyBudget]);

  const billsList = bills.map((bill) => {
    //console.log(props.filter, bill.category);
    if (props.filter !== "None" && bill.category !== props.filter) {
      return null;
    }
    return <BillElement bill={bill} key={bill.id} />;
  });

  return <div className="billsList">{billsList}</div>;
};

const mapStateToProps = (state) => {
  return {
    bills: state.bills,
    monthlyBudget: state.monthlyBudget,
  };
};
export default connect(mapStateToProps, actions)(Bills);
