import React from 'react';
import css from './Friends.module.css';
import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem/FriendsListItem';

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return 
        (
        <FriendsListItem 
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
        )
      })}
    </ul>
  );
}

export default FriendsList;

FriendsList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
