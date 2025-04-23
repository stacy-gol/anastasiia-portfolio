import { Container, Box, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './education-section.module.css';
import { institutions } from '../../utils/data'
import EducationCard from '../Education-Card/education-card';


const EducationSection = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth={false} className={styles.container}>
      <h1 id="about-me">{t('educationSection.aboutMe')}</h1>
      <Divider flexItem sx={{ borderColor: '#3568CC' }} />
      <h2>{t('educationSection.education')}</h2>
      <Box className={styles.flexContainer}>
        {/* Секция с проектами */}
        <Box className={styles.projectSection}>
          {institutions.map((institution, index) => (
            <EducationCard key={index} institution={institution} />
          ))}
        </Box>

        {/* Таймлайн */}
        <Box className={styles.timeline}></Box>
      </Box>
    </Container>
  );
};

export default EducationSection;
