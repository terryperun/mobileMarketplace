import { connect } from 'react-redux';
import { compose } from 'recompose';
import FavoritesScreenView from './FavoritesScreenView';

const enhance = compose(connect());

export default enhance(FavoritesScreenView);
