import React from 'react';
import styles from './contacts-section.module.css';

const contacts = [
  { name: 'telegram', link: 'https://t.me/stacy_gol', buttonText: 'Contact me' },
  { name: 'email', link: 'mailto:golanast14@gmail.com', buttonText: 'Contact me' },
  { name: 'github', link: 'https://github.com/stacy-gol', buttonText: 'Check' },
  { name: 'linkedin', link: 'https://www.linkedin.com/in/anastasiia-golovina-web', buttonText: 'Contact me' },
];

const ContactsSection: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* title */}
      <h1 id="contacts" className={styles.title}>contacts</h1>
      <div className={styles.divider}></div>
      <div className={styles.smallContainer}>
        {/* description */}
        <p className={styles.description}>
        Let's build something meaningful together — feel free to reach out, the best part might just be ahead.
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
                  {contact.buttonText}
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
        designed by{' '}
        <a href="#" className={styles.footerLink}>
          dima andreenko
        </a>
      </p>
    </div>
  );
};

export default ContactsSection;
