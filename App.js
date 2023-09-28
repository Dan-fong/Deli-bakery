import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './source/navigation/RootNavigation';
import { Provider } from 'react-redux';
import { store } from './source/redux/store';

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation  />
      </NavigationContainer>
    </Provider>
  );
} 

const styles = StyleSheet.create({});