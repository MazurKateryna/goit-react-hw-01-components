import React from 'react';
import PropTypes from "prop-types";
import styles from '../Friends/friend-list.module.css'

function FriendList({ friends }) {

 return (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <li key={friend.id} className={styles.item}>
        {friend.isOnline ? (
          <span className={`${styles.status} ${styles.online}`}></span>
        ) : (
          <span className={`${styles.status} ${styles.offline}`}></span>
        )}
        <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
        <p className={styles.name}>{friend.name}</p>
      </li> 
    ))}
  </ul>
 )
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default FriendList;