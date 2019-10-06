/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Importing Screens
import LoginScreen from './src/LoginScreen'
import ListView from './src/ListView'
import ImagesGridView from './src/ImageGridView'
import PostDescription from './src/PostDescription'
import UserData from './src/UserData'
import Form from './src/Form'
import LandingPage from'./src/LandingPage'

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  List: {screen: ListView},
  Image: {screen: ImagesGridView},
  Post: {screen: PostDescription},
  UserData:{screen: UserData},
  Form:{screen: Form},
  LandingPage:{screen: LandingPage}
},
{
  initialRouteName: 'Login'
});

const App = createAppContainer(MainNavigator);

export default App;