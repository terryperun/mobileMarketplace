import { connect } from 'react-redux';
import { compose } from 'recompose';
import BrowseScreenView from './BrowseScreenView';

const enhance = compose(connect());

export default enhance(BrowseScreenView);
