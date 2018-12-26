import { connect } from 'react-redux';
import { compose } from 'recompose';
import InboxScreenView from './InboxScreenView';

const enhance = compose(connect());

export default enhance(InboxScreenView);
