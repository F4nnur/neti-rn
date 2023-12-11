import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../modules/theme/hooks/useTheme';
import { IColors } from '../../modules/theme/types/themeTypes';

const ChatPage = () => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const styles = useStyles(Colors);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('Chat')}</Text>
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
export default ChatPage;
