import { PropTypes } from 'prop-types';
import {
  Item,
  Label,
  Percentage,
  StatisticsWrapper,
  StatsList,
  Title,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(item => (
          <Item key={item.id}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </Item>
        ))}
      </StatsList>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
