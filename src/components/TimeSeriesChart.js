import React from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {connect} from 'react-redux';


const BillingChart  = (props)=>{
    const bills = props.bills;
    const billAmount = [0,0,0,0,0,0,0,0,0,0,0,0];
    bills.forEach(bill=>{
        const month = new Date(bill.date).getMonth();
        billAmount[month]= billAmount[month] +parseInt(bill.amount) ;
        ////console.log(month)
    })
    const state = {
        labels: ['January', 'February', 'March',
                 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Billing Amount',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: billAmount
          }
        ]
      }
    return (
      <div style={{height:'50vh',width:'50vw'}}>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'billing amount',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  
}
const mapStateToProps = (state)=>{
return { bills:state.bills};
}
export default connect(mapStateToProps, null)(BillingChart);