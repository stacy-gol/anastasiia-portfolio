import { Container, Box, Divider } from '@mui/material';
import ProjectCard from '../Project-Card/project-card';
import { projects }  from '../../utils/data'
import styles from './Experience-section.module.css';


const ExperienceSection = () => {
  return (
    <Container maxWidth={false} className={styles.container}>
      <h1 id="experience">my experience</h1>
      <Divider flexItem sx={{ borderColor: '#3568CC' }} />
      <h2>projects</h2>
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
