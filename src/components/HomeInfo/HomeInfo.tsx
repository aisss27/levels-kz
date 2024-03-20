import styles from './HomeInfo.module.css';

export const HomeInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Информация о зарплатах в IT-сфере Казахстана
      </h2>
      <div className={styles.card}>
        <h3 className={styles.subHeading}>Факторы, влияющие на зарплаты</h3>
        <p className={styles.text}>
          Несколько ключевых факторов, влияющих на уровень заработной платы <br/>
          в IT-сфере Казахстана:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Опыт работы</li>
          <li className={styles.listItem}>Образование и сертификации</li>
          <li className={styles.listItem}>Специализация и навыки</li>
          <li className={styles.listItem}>Регион работы</li>
          <li className={styles.listItem}>Текущие рыночные тренды и спрос</li>
        </ul>
      </div>
    </div>
  );
};
