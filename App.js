import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './source/redux/store';
import MainNav from './source/navigation/MainNav';


export default function App() {

  
  return (
    <Provider store={store}>

          <MainNav />
    </Provider>
  );
} 

const styles = StyleSheet.create({});