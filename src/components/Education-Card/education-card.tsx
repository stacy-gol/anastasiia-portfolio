import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  return (
    <Box className={styles.card}>
      {/* Text info */}
      <Box className={styles.textContent}>
        <h3>
        {t(institution.name)}
        </h3>
        <p className={styles.date}>
          {institution.date}
        </p>
        <p className={styles.description}>
        {t(institution.description)}
        </p>   
      </Box>
    </Box>
  );
};

export default EducationCard;
