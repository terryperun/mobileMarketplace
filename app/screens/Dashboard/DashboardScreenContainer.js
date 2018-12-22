import { connect } from 'react-redux';
import { compose, withState, withProps } from 'recompose';
import DashboardScreenView from './DashboardScreenView';

const enhance = compose(connect());

export default enhance(DashboardScreenView);
