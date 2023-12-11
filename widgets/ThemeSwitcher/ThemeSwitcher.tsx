import React from 'react';
import { useTheme } from '../../modules/theme/hooks/useTheme';
import { ThemeTypes } from '../../modules/theme/types/themeTypes';
// @ts-ignore
import LightIcon from '../../shared/assets/icons/lightThemeIcon.svg';
// @ts-ignore
import DarkIcon from '../../shared/assets/icons/darkThemeIcon.svg';
import { Pressable, StyleSheet } from 'react-native';

const ThemeSwitcher = () => {
  const { theme, selectTheme, changeTheme } = useTheme();

  const handleChange = async () => {
    const newTheme = selectTheme === ThemeTypes.DARK ? ThemeTypes.LIGHT : ThemeTypes.DARK;
    changeTheme(newTheme);
  };

  return (
    <Pressable onPress={handleChange} style={styles.button}>
      {theme === ThemeTypes.DARK ? <DarkIcon /> : <LightIcon />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 150,
    left: 180,
  },
});

export default ThemeSwitcher;
