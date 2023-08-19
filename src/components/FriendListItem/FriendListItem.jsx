import React from 'react';
import PropTypes from 'prop-types';
import {FriendItem, StyleStatus, StyleAvatar, StyledName} from './FriendListItem.styled.js';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem className="item">
      <StyleStatus status={isOnline} className={isOnline}></StyleStatus>
      <StyleAvatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <StyledName className="name">{name}</StyledName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
