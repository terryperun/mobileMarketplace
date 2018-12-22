import { connect } from 'react-redux';
import { compose } from 'recompose';
import DashboardScreenView from './DashboardScreenView';

const enhance = compose(connect());

export default enhance(DashboardScreenView);
