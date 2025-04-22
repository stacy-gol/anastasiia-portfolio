// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MainContainer from '../components/Main-Container/main-container';
import Header from '../components/Header/header';
import styles from './app.module.css';
import ExperienceSection from '../components/Experience-Section/experience-section';
import EducationSection from '../components/Education-Section/education-section';
import ContactsSection from '../components/Contacts-Section/contacts-section';


export function App() {
  return (
    <div className={styles.container}>
      <Header />
      <MainContainer/>
      <ExperienceSection/>
      <EducationSection/>
      <ContactsSection/>
    </div>
  );
}

export default App;
