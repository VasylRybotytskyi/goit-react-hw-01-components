import { PropTypes } from 'prop-types';
import {
  Item,
  Label,
  Percentage,
  StatisticsWrapper,
  StatsList,
  Title,
} from './Statistics.styled';
export const Statistics = ({ stats }) => {
  return (
    <StatisticsWrapper>
      <Title>Upload stats</Title>
      <StatsList>
        {stats.map(item => (
          <Item key={item.id}>
            <Label className="label">{item.label}</Label>
            <Percentage className="percentage">{item.percentage}%</Percentage>
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
