import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../pages/main/MainPage';
import AboutPage from '../pages/about/AboutPage';
import LoginPage from '../pages/login/LoginPage';
import TodoPage from '../pages/todo/TodoPage';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../modules/theme/hooks/useTheme';

const StackNavigation = () => {
  const Stack: any = createNativeStackNavigator();
  const { t } = useTranslation();
  const { Colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.backgroundPrimary },
        headerTitleStyle: {
          color: Colors.textPrimary,
        },
      }}
    >
      <Stack.Screen name={'Home'} component={MainPage} options={{ headerTitle: t('Main') }} />
      <Stack.Screen name={'About'} component={AboutPage} options={{ headerTitle: t('About') }} />
      <Stack.Screen name={'Login'} component={LoginPage} options={{ headerTitle: t('Login') }} />
      <Stack.Screen name={'TodoPage'} component={TodoPage} options={{ headerTitle: t('Todo') }} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
