import Welcome from './src/components/Welcome/index.js'
import {createStackNavigator, createAppContainer} from 'react-navigation'

const AppNavigator = createStackNavigator({
  Welcome : {screen: Welcome}
}, {
  initialRouteName: 'Welcome'
}, {
  headerMode: 'screen'
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;