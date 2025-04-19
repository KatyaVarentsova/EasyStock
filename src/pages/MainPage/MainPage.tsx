import styles from './MainPage.module.css'

import { HomeLayout } from '../../components';

export const MainPage = () => {
  return (
    <HomeLayout>
      <div className={styles.container}>
        <button>ТЕСТ 2</button>
      </div>
    </HomeLayout>
  );
};
