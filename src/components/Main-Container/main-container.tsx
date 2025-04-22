import { Box, Button, Divider } from '@mui/material';
import styles from './main-container.module.css';

const MainContainer = () => {
  return (
    <Box className={styles.container}>
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
            front-end <br />
            <span className={styles.shifted}>developer</span>
          </h1>
          <p>
          I am a frontend developer with a background in linguistics who transitioned from human languages to programming languages. With English and French in my toolkit, I connect with people from all over the world and use these skills to keep learning — including in coding. 
          </p>
          <p>
          After gaining solid experience in tech support, I learned programming on real-world problems and keep improving by building new projects. 
          </p>
          <p> 
            My current stack includes JavaScript, TypeScript, React, and Next.js.
          </p>
          <p>
            I'm passionate about the topics of women's health and well-being and hope to join a femtech project someday.
          </p>
          {/* Button */}
          <Box className={styles.buttonContainer}>
            <Button variant="outlined" href="#" className={styles.button}>
              download my resume
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider flexItem sx={{ my: 2, borderColor: '#3568CC' }} />
    </Box>
  );
};

export default MainContainer;
