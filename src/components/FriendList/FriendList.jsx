import React from 'react';
import PropTypes from 'prop-types';
import { StyledFriendList } from './FriendList.styled.js'
import FriendListItem from '../FriendListItem/FriendListItem'



const FriendList = ({ friends }) => {
    return (
      <StyledFriendList className="friend-list">
        {friends.map(friend => (
          <FriendListItem key={friend.id} {...friend} />
        ))}
      </StyledFriendList>
    );
  };


  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

export default FriendList;