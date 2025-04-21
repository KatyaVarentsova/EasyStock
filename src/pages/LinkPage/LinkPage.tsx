import styles from './LinkPage.module.css'
import { Button, HomeLayout } from '../../components';

export const LinkPage = () => {
  return (
    <HomeLayout>
      <div className={styles.container}>
        <Button className={styles.button_link} onClick={() => window.open("https://true.tabs.sale/share/shrX9h8C1pjUCv1FbR3i8", "_blank")}>Предстовление склада онлайн</Button>
      </div>
    </HomeLayout>
  );
};
