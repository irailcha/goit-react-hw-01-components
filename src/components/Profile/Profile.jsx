import React from 'react';
import PropTypes from 'prop-types';
import {StyledProfile,StyledAvatar,StyledName, StyledInfo,StyledLabel, StyledQuantity, 
  StyledStats, StyledStatsList, StyledDescription } from './Profile.styled';


const Profile = ({username, tag, location, avatar, stats}) => {
    const { followers, views, likes } = stats;
  
  return (
  
    <StyledProfile className="profile">
      <StyledDescription className="description">
        <StyledAvatar src={avatar} alt="User avatar" className="avatar" />

        <StyledName className="name">{username}</StyledName>
        <StyledInfo className="tag">@{tag}</StyledInfo>
        <StyledInfo className="location">{location}</StyledInfo>
      </StyledDescription>

      <StyledStats className="stats">
        <StyledStatsList>
          <StyledLabel className="label">Followers</StyledLabel>
          <StyledQuantity className="quantity">{followers}</StyledQuantity>
        </StyledStatsList>
        <StyledStatsList>
          <StyledLabel className="label">Views</StyledLabel>
          <StyledQuantity className="quantity">{views}</StyledQuantity>
        </StyledStatsList>
        <StyledStatsList>
          <StyledLabel className="label">Likes</StyledLabel>
          <StyledQuantity className="quantity">{likes}</StyledQuantity>
        </StyledStatsList>
      </StyledStats>
    </StyledProfile>
   
  );
};

Profile.propTypes = {
  
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,

};

export default Profile;
