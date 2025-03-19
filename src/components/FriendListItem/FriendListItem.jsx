import css from '../FriendList/FriendList.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friend_container}>
      <img className={css.friend_avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friend_name}>{name}</p>
      <p
        className={clsx(
          css.friend_status,
          isOnline ? css.isOnline : css.isOffline,
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
