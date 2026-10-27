import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootDrawer from './navigation/RootDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <RootDrawer />
    </NavigationContainer>
  );
}
