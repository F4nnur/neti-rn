import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const ChatPage = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('Chat')}</Text>
    </View>
  );
};

export default ChatPage;
