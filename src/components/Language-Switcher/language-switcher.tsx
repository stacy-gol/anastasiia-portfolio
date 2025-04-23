import { useTranslation } from 'react-i18next';
import styles from './language-switcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'ru') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.switcher}>
      <button className={styles.button} onClick={() => changeLanguage('en')}>
        EN
      </button>
      <button className={styles.button} onClick={() => changeLanguage('ru')}>
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
