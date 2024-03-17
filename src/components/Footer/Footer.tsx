import styles from './Footer.module.css';
import aisavatar from '../../../public/aisphoto.jpeg'
import arsavatar from '../../../public/arsphoto.jpg';


export const Footer = () => {
  const developers = [
    {
      name: 'Aisultan',
      githubUsername: 'aisss27',
      avatarUrl: `${aisavatar}`,
    },
    {
      name: 'Alexandr',
      githubUsername: 'Sanechek1337',
      avatarUrl: 'https://avatars.githubusercontent.com/u/60388678?v=4',
    },
    {
      name: 'Arslan',
      githubUsername: 'barbarian10',
      avatarUrl: `${arsavatar}`,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.developerContainer}>
        {developers.map((developer, index) => (
          <div key={index} className={styles.developerCard}>
            <img src={developer.avatarUrl} alt={developer.name} className={styles.developerImage} />
            <h3>{developer.name}</h3>
            <p>
              GitHub: <br/> <a href={`https://github.com/${developer.githubUsername}`} className={styles.githubLink}>{developer.githubUsername}</a>
            </p>
          </div>
        ))}
      </div>
      <p className={styles.footerText}>©️ 2024, LevelsKZ, All Rights Reserved</p>
    </footer>
  );
};