import { companiesList } from './data';
import styles from './InfiniteScroller.module.css';

const InfiniteScroller = () => {
  return (
    <div className={styles.logos}>
      <div className={styles.logosSlide}>
        {companiesList.map((company) => (
          <div className={styles.card} key={company.id}>
            <img src={company.image} alt={company.name} />
            <p>{company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroller;
