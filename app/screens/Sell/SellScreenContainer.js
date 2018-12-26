import { connect } from 'react-redux';
import { compose } from 'recompose';
import SellScreenView from './SellScreenView';

const enhance = compose(connect());

export default enhance(SellScreenView);
