import React from 'react';
import css from './Profile.module.css';
import PropTypes from 'prop-types';

function Profile({name, tag, location, avatar, stats}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          className={css.avatar}
          alt="User avatar"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>

      </ul>
    </div>
  );
}

export default Profile;
