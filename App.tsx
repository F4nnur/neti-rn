import React, { useEffect } from 'react';
import { Linking, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './navigation/TabNavigation';
import Navigation from './navigation/Navigtion';
import DeepLinking from './navigation/DeepLinking';
import { ThemeProvider } from './modules/theme/ThemeProvider';

function App() {
  const Stack: any = createNativeStackNavigator();

  useEffect(() => {
    Linking.getInitialURL().then(async deepLinkInitialURL => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  }, []);

  return (
    <ThemeProvider>
      <GestureHandlerRootView style={styles.root}>
        <NavigationContainer ref={Navigation.navigationRef} linking={DeepLinking.linking}>
          <Stack.Navigator>
            <Stack.Screen name={'Tab'} component={TabNavigation} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
