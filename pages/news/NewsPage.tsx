import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const NewsPage = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('News')}</Text>
    </View>
  );
};

export default NewsPage;
