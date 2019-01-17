import { connect } from 'react-redux';
import { compose } from 'recompose';
import CartScreenView from './CartScreenView';

const enhance = compose(connect());

export default enhance(CartScreenView);
