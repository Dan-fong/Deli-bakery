import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './source/navigation/RootNavigation';

export default function App() {

  return (
    <NavigationContainer>
      <RootNavigation  />
    </NavigationContainer>
  );
} 

const styles = StyleSheet.create({});
