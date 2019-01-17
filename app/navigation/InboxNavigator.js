import { createStackNavigator } from 'react-navigation';
import Inbox from '../screens/Inbox/InboxScreenContainer';
import screens from './screens';

const routes = {
  [screens.Inbox]: Inbox,
};

const InboxNavigator = createStackNavigator(routes);

export default InboxNavigator;
