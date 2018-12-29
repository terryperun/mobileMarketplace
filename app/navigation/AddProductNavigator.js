import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import AddProductScreen from '../screens/AddProduct/AddProductScreenContainer';
// import SellScreen from '../screens/Sell/SellScreenContainer';

const routes = {
  [screens.AddProduct]: AddProductScreen,
  // [screens.Sell]: SellScreen,
};

const AppNavigator = createStackNavigator(routes);

export default AppNavigator;
