import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('About')}</Text>
    </View>
  );
};

export default AboutPage;
