import { connect } from 'react-redux';
import { compose } from 'recompose';
// import { StatusBar } from 'react-native';

import AddProductScreenView from './AddProductScreenView';

const enhance = compose(connect());

export default enhance(AddProductScreenView);
