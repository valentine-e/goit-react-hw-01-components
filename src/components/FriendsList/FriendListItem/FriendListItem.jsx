import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li key={id} className={css.item}>
      <span
        className={isOnline === true ? css.statusOnline : css.statusOffline}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
