import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { LangType } from '../../modules/lang/LangType';
import { useRootStore } from '../../hooks/useRootStore';
import ThemeSwitcher from '../../widgets/ThemeSwitcher/ThemeSwitcher';
import { useTheme } from '../../modules/theme/hooks/useTheme';
import { IColors } from '../../modules/theme/types/themeTypes';

const MainPage = observer(() => {
  const navigation: any = useNavigation();
  const { langStore } = useRootStore();
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const styles = useStyles(Colors);

  useEffect(() => {
    langStore.getLang();
  }, []);

  const handleChangingLang = async () => {
    await langStore.changeLang(LangType.RU === langStore.lang ? LangType.EN : LangType.RU);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.mainButton} onPress={() => navigation.navigate('About')}>
          <Text style={styles.text}>{t('About')}</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>{t('Login')}</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={() => navigation.navigate('TodoPage')}>
          <Text style={styles.text}>{t('Todo')}</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={handleChangingLang}>
          <Text style={styles.text}>{t('ChangeLang')}</Text>
        </Pressable>
        <ThemeSwitcher />
      </View>
    </View>
  );
});

const useStyles = (colors: IColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignContent: 'center',
      backgroundColor: colors.backgroundPrimary,
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
