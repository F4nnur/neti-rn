import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from './StackNavigation';
import SettingsPage from '../pages/settings/SettingsPage';
import NewsPage from '../pages/news/NewsPage';
import MainPage from '../pages/main/MainPage';
import { Pressable, Text } from 'react-native';

const TabNavigation = () => {
  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name='Navigation' component={StackNavigation} options={{ headerShown: false }} />
      <Tab.Screen name='Settings' component={SettingsPage} />
      <Tab.Screen name='News' component={NewsPage} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
