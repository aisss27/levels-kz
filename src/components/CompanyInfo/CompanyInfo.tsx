import styles from './CompanyInfo.module.css';
import BarChartSalaries from '../BarChart/BarChartSalaries.tsx';

export const CompanyInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Информация о зарплатах в IT-сфере Казахстана
      </h2>
      <div className={styles.card}>
        <h3 className={styles.subHeading}>Статистика зарплат</h3>
        <p>
          Средняя зарплата в IT-сфере Казахстана варьируется в зависимости от
          должности и опыта работы.
        </p>
        <ul>
          <li>Junior разработчик: 100 000 KZT - 150 000 KZT</li>
          <li>Middle разработчик: 200 000 KZT - 300 000 KZT</li>
          <li>Senior разработчик: 350 000 KZT - 500 000 KZT</li>
          <li>QA инженер: 150 000 KZT - 250 000 KZT</li>
          <li>Системный администратор: 200 000 KZT - 300 000 KZT</li>
        </ul>
      </div>
      <BarChartSalaries/>
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
