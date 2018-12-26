import { createStackNavigator } from 'react-navigation';
import Browse from '../screens/Browse/BrowseScreenContainer';
import screens from './screens';

const routes = {
  [screens.Browse]: Browse,
};

const BrowseNavigator = createStackNavigator(routes);

export default BrowseNavigator;
