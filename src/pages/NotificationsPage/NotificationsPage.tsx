import styles from "./NotificationsPage.module.css"
import { HomeLayout } from '../../components';

export const NotificationsPage = () => {
    return (
      <HomeLayout>
        <div className={styles.container}>
          <button>ТЕСТ</button>
        </div>
      </HomeLayout>
    );
  };