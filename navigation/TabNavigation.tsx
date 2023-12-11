import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from './StackNavigation';
import SettingsPage from '../pages/settings/SettingsPage';
import NewsPage from '../pages/news/NewsPage';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../modules/theme/hooks/useTheme';

const TabNavigation = () => {
  const Tab: any = createBottomTabNavigator();
  const { t } = useTranslation();
  const { Colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.textPrimary,
        tabBarInactiveTintColor: Colors.textPrimary,
        headerStyle: { backgroundColor: Colors.backgroundPrimary },
        headerTitleStyle: {
          color: Colors.textPrimary,
        },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: Colors.backgroundPrimary,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name={'Navigation'}
        component={StackNavigation}
        options={{ headerShown: false, tabBarLabel: t('Main'), headerTitle: t('Main') }}
      />
      <Tab.Screen
        name={'Settings'}
        component={SettingsPage}
        options={{ tabBarLabel: t('Settings'), headerTitle: t('Settings') }}
      />
      <Tab.Screen name={'News'} component={NewsPage} options={{ tabBarLabel: t('News'), headerTitle: t('News') }} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
