import React from 'react';
import PropTypes from 'prop-types';
import {StyledTable, StyledTableHeader} from './TransactionHistory.styled.js';



const TransactionHistory =({items})=>{
return (
<StyledTable className="transaction-history">
  <StyledTableHeader>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </StyledTableHeader>

  <tbody>
    {items.map(item =>(
        <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
 ))}
    
  </tbody>
</StyledTable>
)}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory
