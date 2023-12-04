import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../pages/main/MainPage';
import AboutPage from '../pages/about/AboutPage';
import LoginPage from '../pages/login/LoginPage';
import TodoPage from '../pages/todo/TodoPage';
import { useTranslation } from 'react-i18next';

const StackNavigation = () => {
  const Stack: any = createNativeStackNavigator();
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={MainPage} options={{ headerTitle: t('Main') }} />
      <Stack.Screen name={'About'} component={AboutPage} options={{ headerTitle: t('About') }} />
      <Stack.Screen name={'Login'} component={LoginPage} options={{ headerTitle: t('Login') }} />
      <Stack.Screen name={'TodoPage'} component={TodoPage} options={{ headerTitle: t('Todo') }} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
