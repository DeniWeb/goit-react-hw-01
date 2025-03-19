import FriendListItem from './FriendListItem';
import friends from '../friends.json';
import css from './FriendList.module.css';

const FriendList = () => {
  return (
    <ul className={css.friends_wrapper}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
