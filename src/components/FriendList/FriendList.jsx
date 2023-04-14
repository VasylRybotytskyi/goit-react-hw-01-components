import { PropTypes } from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { List, Section } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <List>
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </List>
    </Section>
  );
};
FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
