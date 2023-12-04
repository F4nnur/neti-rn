import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('Login')}</Text>
    </View>
  );
};

export default LoginPage;
