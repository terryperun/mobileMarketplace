import { createStackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/Profile/ProfileScreenContainer';
import screens from './screens';

const routes = {
  [screens.Profile]: ProfileScreen,
};

const ProfileNavigator = createStackNavigator(routes);

export default ProfileNavigator;
