import { PropTypes } from 'prop-types';
import { Avatar, Item, Name, Status } from './FriendListItem.styled';
export const FriendListItem = ({ friend }) => {
  return (
    <Item>
      <Status isOnline={friend.isOnline}>{friend.isOnline}</Status>
      <Avatar src={friend.avatar} width={48} alt={friend.name} />
      <Name>{friend.name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
