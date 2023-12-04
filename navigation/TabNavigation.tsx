import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from './StackNavigation';
import SettingsPage from '../pages/settings/SettingsPage';
import NewsPage from '../pages/news/NewsPage';
import { useTranslation } from 'react-i18next';

const TabNavigation = () => {
  const Tab: any = createBottomTabNavigator();
  const { t } = useTranslation();

  return (
    <Tab.Navigator>
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
