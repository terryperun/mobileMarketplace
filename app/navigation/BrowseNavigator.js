import { createStackNavigator } from 'react-navigation';
import BrowseScreen from '../screens/Browse/BrowseScreenContainer';
import screens from './screens';

const routes = {
  [screens.Browse]: BrowseScreen,
};

const AddProductNavigator = createStackNavigator(routes);

export default AddProductNavigator;
