import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.profile_people}>
        <img className={css.profile_avatar} src={image} alt="User avatar" />
        <p className={css.profile_name}>{name}</p>
        <p className={css.profile_tag}>@{tag}</p>
        <p className={css.profile_location}>{location}</p>
      </div>

      <ul className={css.profile_stats}>
        <li className={css.profile_stats_content}>
          <span>Followers</span>
          <span className={css.profile_stats_numbers}>{stats.followers}</span>
        </li>
        <li className={css.profile_stats_content}>
          <span>Views</span>
          <span className={css.profile_stats_numbers}>{stats.views}</span>
        </li>
        <li className={css.profile_stats_content}>
          <span>Likes</span>
          <span className={css.profile_stats_numbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
