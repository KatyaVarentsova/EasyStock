import styles from './OrdersPage.module.css'
import { HomeLayout } from '../../components';

export const OrdersPage = () => {
    return (
      <HomeLayout>
        <div className={styles.container}>
          <button>ТЕСТ</button>
        </div>
      </HomeLayout>
    );
  };