import { connect } from 'react-redux';
import { compose, withState, withProps } from 'recompose';
import ProfileScreenView from './ProfileScreenView';

const enhance = compose(connect());

export default enhance(ProfileScreenView);
