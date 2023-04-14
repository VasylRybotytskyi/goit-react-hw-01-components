import { PropTypes } from 'prop-types';
import {
  Avatar,
  Description,
  Name,
  ProfileWrapper,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
  StatsItem,
} from './Profile.styled';

export const Profile = ({
  items: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt={`${username}'s avatar`} width={100} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  items: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
