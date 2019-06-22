import Login from './src/components/Login/index.js'
import {createStackNavigator, createAppContainer} from 'react-navigation'

const AppNavigator = createStackNavigator({
  Login : {screen: Login}
}, {
  initialRouteName: 'Login'
}, {
  headerMode: 'screen'
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;