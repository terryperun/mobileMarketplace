import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import DashboardScreenView from './DashboardScreenView';
import screens from '../../navigation/screens';

const enhance = compose(
  connect(),
  withHandlers({
    goToCart: (props) => () => {
      props.navigation.navigate(screens.Cart);
    },
  }),
);

export default enhance(DashboardScreenView);
