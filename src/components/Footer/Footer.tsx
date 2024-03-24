import styles from './Footer.module.css';
import { developers } from './data.ts';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.developerContainer}>
        {developers.map((developer, index) => (
          <div key={index} className={styles.developerCard}>
            <img
              src={developer.avatarUrl}
              alt={developer.name}
              className={styles.developerImage}
            />
            <h3 className={styles.developerName}>{developer.name}</h3>
            <p>
              GitHub: <br />{' '}
              <a
                href={`https://github.com/${developer.githubUsername}`}
                className={styles.githubLink}
              >
                {developer.githubUsername}
              </a>
            </p>
          </div>
        ))}
      </div>
      <p className={styles.footerText}>
        ©️ 2024, LevelsKZ, All Rights Reserved
      </p>
    </footer>
  );
};
