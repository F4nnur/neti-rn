import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IColors } from '../../modules/theme/types/themeTypes';
import { useTheme } from '../../modules/theme/hooks/useTheme';

const TodoPage = () => {
  const { Colors } = useTheme();
  const styles = useStyles(Colors);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TodoPage</Text>
    </View>
  );
};

const useStyles = (colors: IColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundPrimary,
    },
    text: {
      color: colors.textPrimary,
    },
  });
export default TodoPage;
