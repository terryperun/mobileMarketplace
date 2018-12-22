import { createStackNavigator } from 'react-navigation';
import DashboardScreen from '../screens/Dashboard/DashboardScreenContainer';
import screens from './screens';

const routes = {
  [screens.Dashboard]: DashboardScreen,
};

const DashboardNavigator = createStackNavigator(routes);

export default DashboardNavigator;
