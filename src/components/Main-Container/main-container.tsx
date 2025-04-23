import { Box, Button, Divider } from '@mui/material';
import styles from './main-container.module.css';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../Language-Switcher/language-switcher';


const MainContainer = () => {
  const { t, i18n } = useTranslation();
const resumeLink =
  i18n.language === 'ru'
    ? 'https://drive.google.com/file/d/1V21AlhoyfN4gxsSgSGgSArsR6h5_8UX9/view?usp=sharing'
    : 'https://drive.google.com/file/d/1c4Srnq0uMQe7BU5_4MdLX9SCPgSV9S2q/view?usp=sharing';
  return (
    <Box className={styles.container}>
      <LanguageSwitcher></LanguageSwitcher>  
      <Box className={styles.flexContainer}>
        <Box>
          {/* Desktop image*/}
          <Box
            component="img"
            src="https://res.cloudinary.com/dfeszdhhf/image/upload/v1739120501/IMG_6002_aol58s.jpg"
            alt="Anastasiia's portfolio photo"
            className={`${styles.image} ${styles.desktopImage}`}
          />
        </Box>
        {/* Mobile image */}
        <Box
          component="img"
          src="https://res.cloudinary.com/dfeszdhhf/image/upload/v1742581073/IMG_7338_zk2tdc.jpg"
          alt="Anastasiia's mobile portfolio photo"
          className={`${styles.image} ${styles.mobileImage}`}
        />
        <Box className={styles.flexItem}>
          <h1 className={styles.flexItem_title}>
          {t('main.title')}<br />
            <span className={styles.shifted}>{t('main.subtitle')}</span>
          </h1>
          <p>{t('main.paragraph1')}</p>
          <p>{t('main.paragraph2')}</p>
          <p>{t('main.paragraph3')}</p>
          <p>{t('main.paragraph4')}</p>
          {/* Button */}
          <Box className={styles.buttonContainer}>
            <Button variant="outlined" href={resumeLink} target="_blank" rel="noopener noreferrer" className={styles.button}>
            {t('main.resumeButton')}
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider flexItem sx={{ my: 2, borderColor: '#3568CC' }} />
    </Box>
  );
};

export default MainContainer;
