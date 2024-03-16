import styles from './HomeInfo.module.css';

export const HomeInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Информация о зарплатах в IT-сфере Казахстана
      </h2>
      <div className={styles.card}>
        <h3 className={styles.subHeading}>Факторы, влияющие на зарплаты</h3>
        <p>
          Несколько ключевых факторов, влияющих на уровень заработной платы <br/>
          в IT-сфере Казахстана:
        </p>
        <ul>
          <li>Опыт работы</li>
          <li>Образование и сертификации</li>
          <li>Специализация и навыки</li>
          <li>Регион работы</li>
          <li>Текущие рыночные тренды и спрос</li>
        </ul>
      </div>
    </div>
  );
};
