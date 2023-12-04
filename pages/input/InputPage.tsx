import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const InputPage = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('Input')}</Text>
    </View>
  );
};

export default InputPage;
