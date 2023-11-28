import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../pages/main/MainPage';
import AboutPage from '../pages/about/AboutPage';
import LoginPage from '../pages/login/LoginPage';
import TodoPage from '../pages/todo/TodoPage';

const StackNavigation = () => {
  const Stack: any = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={MainPage} />
      <Stack.Screen name='About' component={AboutPage} />
      <Stack.Screen name='Login' component={LoginPage} />
      <Stack.Screen name='TodoPage' component={TodoPage} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
