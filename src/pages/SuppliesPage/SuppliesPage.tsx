import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSupply } from "../../api/mockServer";
import styles from "./SuppliesPage.module.css";
import { HomeLayout } from "../../components";

export const SuppliesPage = () => {
  const [supplies, setSupplies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSupply();
        const records = response?.data?.records || [];

        const transformed = records.map((record) => ({
          id: record.fields.id,
          quantity: record.fields.quantity,
        }));

        setSupplies(transformed);
      } catch (error) {
        console.error("Ошибка при загрузке поставок:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <HomeLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>Поставки</h2>
        <h3 className={styles.subtitle}>Ожидают размещения</h3>
        <ul className={styles.supplyList}>
          {supplies.map((supply) => (
            <li key={supply.id} className={styles.supplyItem}>
              <Link to={`/supplies/${supply.id}`} className={styles.link}>
                <span>№ {supply.id}</span>
                <span>{supply.quantity} позиций</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </HomeLayout>
  );
};
