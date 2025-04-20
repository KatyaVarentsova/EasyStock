import styles from "./MainPage.module.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HomeLayout } from "../../components";

export const MainPage = () => {
  const [query, setQuery] = useState("");

  return (
    <HomeLayout>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Артикул"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
        <FaSearch className={styles.searchIcon} />
      </div>
      <button className={styles.searchButton}>Поиск</button>
    </HomeLayout>
  );
};
