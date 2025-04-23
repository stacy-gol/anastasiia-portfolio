import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './contacts-section.module.css';

const contacts = [
  { name: 'telegram', link: 'https://t.me/stacy_gol', buttonText: 'contactsSection.contactButtons.contactMe' },
  { name: 'email', link: 'mailto:golanast14@gmail.com', buttonText: 'contactsSection.contactButtons.contactMe' },
  { name: 'github', link: 'https://github.com/stacy-gol', buttonText: 'contactsSection.contactButtons.check' },
  { name: 'linkedin', link: 'https://www.linkedin.com/in/anastasiia-golovina-web', buttonText: 'contactsSection.contactButtons.contactMe' },
];

const ContactsSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      {/* title */}
      <h1 id="contacts" className={styles.title}>{t('contactsSection.contacts')}</h1>
      <div className={styles.divider}></div>
      <div className={styles.smallContainer}>
        {/* description */}
        <p className={styles.description}>
        {t('contactsSection.description')}
        </p>

        {/* contacts */}
        <div className={styles.contactsContainer}>
          {contacts.map((contact, index) => (
            <div key={index}>
              <div className={styles.contactRow}>
                <span className={styles.contactName}>{contact.name}</span>
                <a 
                  href={contact.link} 
                  className={styles.button} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t(contact.buttonText)}
                </a>
              </div>
              {index < contacts.length - 1 && (
                <div className={styles.divider}></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* credits */}
      <p className={styles.footer}>
      {t('footer.designedBy')}{' '}
        <a href="https://www.behance.net/diidentikit" target='_blank' className={styles.footerLink}>
        {t('footer.linkText')}
        </a>
      </p>
    </div>
  );
};

export default ContactsSection;
