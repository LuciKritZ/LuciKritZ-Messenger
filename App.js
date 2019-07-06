import './src/components/Info/fixTimerError'
import Home from './src/components/Home/index.js';
import Login from './src/components/Login/index.js';
import ChatScreen from './src/components/Chats/index.js';
import Profile from './src/components/Profile/index.js';
import AuthLoadingScreen from './src/components/Login/AuthLoadingScreen';
import Register from './src/components/Register/index'
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation'

const AppStack = createStackNavigator({
  Home : {screen: Home},
  Chat: {screen : ChatScreen},
  Profile: {screen: Profile}
});

const AuthStack = createStackNavigator({
  Login : {screen: Login},
  Register: {screen: Register}
}, {
  initialRouteName: 'Login'
}, {
  headerMode: 'screen'
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
));