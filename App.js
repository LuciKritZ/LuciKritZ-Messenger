import Home from './src/components/Home/index.js'
import Login from './src/components/Login/index.js'
import AuthLoadingScreen from './src/components/Login/AuthLoadingScreen'
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation'

const AppStack = createStackNavigator({
  Home : {screen: Home}
});

const AuthStack = createStackNavigator({
  Login : {screen: Login}
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