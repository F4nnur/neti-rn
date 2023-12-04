import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const SettingsPage = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text>{t('Settings')}</Text>
    </View>
  );
};

export default SettingsPage;
