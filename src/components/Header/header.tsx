import { Box, Link, Divider } from '@mui/material';
import headerStyles from './header.module.css';
import { useTranslation } from 'react-i18next';


export function Header() {
  const { t } = useTranslation();

  const links = [
    { id: 'about-me', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'contacts', label: t('nav.contacts') },
  ];
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box className={headerStyles.headerContainer}>
      {/* Header */}
      <Box className={headerStyles.header}>
        <div className={headerStyles.titleContainer}>
            <h1>{t('nav.name')}</h1>
            <h1>{t('nav.surname')}</h1>
        </div>
        <img
          src="https://res.cloudinary.com/dfeszdhhf/image/upload/v1732378288/star_n9hwq8.png"
          alt="Header-decore" className={headerStyles.headerImage}
        />
      </Box>

      <Divider flexItem sx={{ my: 1, borderColor: '#3568CC' }} />


      {/* Navigation Links */}
      <Box className={headerStyles.navigationLinks}>
      {links.map((link, index) => (
        <Link
          onClick={() => handleScroll(link.id)}
          key={index}
          underline="hover"
          color="inherit"
          sx={{
            fontSize: { xs: '16px', sm: '20px' }
          }}
        >
          {link.label}
        </Link>
      ))}
    </Box>
    </Box>
  );
}

export default Header;