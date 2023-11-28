import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainPage = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Main</Text>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.mainButton} onPress={() => navigation.navigate('About')}>
          <Text style={styles.text}>About</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={() => navigation.navigate('TodoPage')}>
          <Text style={styles.text}>TodoPage</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  mainButton: {
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2F70AF',
    width: 150,
    marginBottom: 16,
    marginLeft: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  mainText: {
    alignSelf: 'center',
    fontSize: 28,
    marginBottom: 16,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

export default MainPage;
