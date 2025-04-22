import React from 'react';
import { Box } from '@mui/material';
import styles from './Education-card.module.css';


interface Education {
  name: string;
  date: string;
  description: string;
}

interface EducationCardProps {
  institution: Education; 
}

const EducationCard: React.FC<EducationCardProps> = ({ institution }) => {
  return (
    <Box className={styles.card}>
      {/* Text info */}
      <Box className={styles.textContent}>
        <h3>
          {institution.name}
        </h3>
        <p className={styles.date}>
          {institution.date}
        </p>
        <p className={styles.description}>
          {institution.description}
        </p>   
      </Box>
    </Box>
  );
};

export default EducationCard;
