import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.styled.js';

import {StyledProfile, StyledStatList, StyledStatItem, StyledTitle, StyledStatLabel, StyledStatPercentage } from './Statistics.styled';


const Statistics =({title,  stats}) => {

return (
<StyledProfile className="statistics">
{title && <StyledTitle className="title">{title}</StyledTitle>}

<StyledStatList  className="stat-list">
{stats.map(stat =>
    <StyledStatItem label={stat.label} key={stat.id} className="item">
    <StyledStatLabel  className="label">{stat.label}</StyledStatLabel>
    <StyledStatPercentage className="percentage">{stat.percentage}%</StyledStatPercentage>
  </StyledStatItem>
)}
</StyledStatList>

</StyledProfile>

)}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  
  export default Statistics;