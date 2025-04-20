// 📁 src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div>
      <div className={styles.pageWrapper}>
        <Menu />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
