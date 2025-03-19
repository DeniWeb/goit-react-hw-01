import './App.css';
import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import userData from './components/userData.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      ></Profile>
      <FriendList></FriendList>
    </>
  );
}
