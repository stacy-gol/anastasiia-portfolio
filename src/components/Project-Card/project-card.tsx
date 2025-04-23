import React from 'react';
import { Box, Chip } from '@mui/material';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'; 

import { Navigation, Pagination } from 'swiper/modules';

import styles from './project-card.module.css';


interface Project {
  name: string;
  date: string;
  description: string;
  technologies: string[];
  images: string[];
  NDA?: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Box className={styles.card}>
      {/* Text info */}
      <Box className={styles.textContent}>
        <h3>
          {project.name}
        </h3>
        <p className={styles.date}>
          {project.date}
        </p>
        <p className={styles.description}>
          {project.description}
        </p>
        <Box className={styles.techContainer}>
          {project.technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              sx={{
                backgroundColor: '#3568CC',
                borderRadius: '7px',
                color: 'white',
                fontWeight: 600,
                fontSize: {
                  xs: '14px', 
                  md: '20px'
                },
              }}
            />
          ))}
        </Box>
        <p className={styles.description}>
          {project.NDA
            ? 'The code is under NDA'
            : project.link && (
                <>
                  The code is{' '}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#3568CC', textDecoration: 'underline' }}
                  >
                    here
                  </a>
                </>
              )}
        </p>
      </Box>

      {project.images && (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className={styles.carouselWrapper}
        >
          {project.images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img src={src} alt={`slide-${idx}`} className={styles.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default ProjectCard;
