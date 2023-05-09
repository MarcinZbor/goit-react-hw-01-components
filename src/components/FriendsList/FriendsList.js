import React from 'react';
import css from './Friends.module.css';
import PropTypes from 'prop-types';

function FriendsList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span
            className={friend.isOnline ? css.statusOnline : css.statusOffline}
          ></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;
