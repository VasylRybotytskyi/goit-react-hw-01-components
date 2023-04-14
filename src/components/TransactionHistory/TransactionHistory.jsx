import { PropTypes } from 'prop-types';
import {
  ColumnTitle,
  TableTransitionHistory,
  TableData,
  TableHead,
  TableRow,
  Section,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <TableTransitionHistory>
        <TableHead>
          <tr>
            <ColumnTitle>Type</ColumnTitle>
            <ColumnTitle>Amount</ColumnTitle>
            <ColumnTitle>Currency</ColumnTitle>
          </tr>
        </TableHead>
        <tbody>
          {items.map(({ id, type, amount, currency }, index) => (
            <TableRow key={id} index={index}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          ))}
        </tbody>
      </TableTransitionHistory>
    </Section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
