import { createStackNavigator } from 'react-navigation';
import Favorites from '../screens/Favorites/FavoritesScreenContainer';
import screens from './screens';

const routes = {
  [screens.Favorites]: Favorites,
};

const FavoritesNavigator = createStackNavigator(routes);

export default FavoritesNavigator;
