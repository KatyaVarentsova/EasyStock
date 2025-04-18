import { type ReactNode } from 'react';
import styles from './HomeLayout.module.css';

export const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
