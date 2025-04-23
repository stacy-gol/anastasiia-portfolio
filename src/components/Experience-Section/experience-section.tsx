import { Container, Box, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../Project-Card/project-card';
import { projects }  from '../../utils/data'
import styles from './Experience-section.module.css';


const ExperienceSection = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth={false} className={styles.container}>
      <h1 id="experience">{t('experience.title')}</h1>
      <Divider flexItem sx={{ borderColor: '#3568CC' }} />
      <h2>{t('experience.projects')}</h2>
      <Box className={styles.flexContainer}>
        {/* Секция с проектами */}
        <Box className={styles.projectSection}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Box>

        {/* Таймлайн */}
        <Box className={styles.timeline}></Box>
      </Box>
    </Container>
  );
};

export default ExperienceSection;
