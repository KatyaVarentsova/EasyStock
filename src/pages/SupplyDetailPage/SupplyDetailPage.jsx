import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getSupply,
  getProductsByIds,
  updateSupplyStatus,
  updateProductsQuantity,
} from "../../api/mockServer";
import styles from "./SupplyDetailPage.module.css";

export const SupplyDetailPage = () => {
  const { id } = useParams();
  const [supply, setSupply] = useState(null);
  const [products, setProducts] = useState([]);
  const [recordId, setRecordId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSupply();
      const record = response?.data?.records.find(
        (r) => r.fields.id === Number(id)
      );

      if (!record) return;

      const fields = record.fields;
      setSupply(fields);
      setRecordId(record.recordId);
      const productIds = fields.products || [];
      const productRecords = await getProductsByIds(productIds);
      const names = productRecords.map(
        (prod) => prod.fields?.name || "Без названия"
      );

      setProducts(names);
    };

    fetchData();
  }, [id]);

  if (!supply) return <p>Загрузка...</p>;

  const handleCompleteSupply = async () => {
    if (!recordId || !supply) return;
    setLoading(true);
    setStatus("Загрузка...");

    try {
      const productRecords = await getProductsByIds(supply.products || []);
      await updateProductsQuantity(productRecords, supply.quantity);

      const updatedFields = {
        ...supply,
        status: "завершено",
      };

      await updateSupplyStatus(recordId, updatedFields);
      setSupply((prev) => ({ ...prev, Статус: "завершено" }));
      setStatus("Поставка успешно завершена");
    } catch (error) {
      console.error("Ошибка при обновлении:", error);
      setStatus("Ошибка при обновлении");
    } finally {
      setLoading(false);
    }
  };

  if (!supply) return <p>Загрузка...</p>;
  const isArchived = supply?.status === "завершено";

  const createdAt = new Date(supply.createdAt).toLocaleDateString("ru-RU");
  const outDate = new Date(supply.outDate).toLocaleDateString("ru-RU");
  return (
    <div className={styles.container}>
      {!supply ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <h2>Детали поставки №{supply.id}</h2>
          <p>
            <strong>Дата создания:</strong> {createdAt}
          </p>
          <p>
            <strong>Планируемая отгрузка:</strong> {outDate}
          </p>
          <p>
            <strong>Количество:</strong> {supply.quantity} позиций
          </p>
          <p>
            <strong>Товары:</strong>
          </p>
          <ul>
            {products.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          <button
            onClick={handleCompleteSupply}
            className={styles.completeBtn}
            disabled={loading || isArchived}
          >
            {isArchived
              ? "В архиве"
              : loading
              ? "Обновление..."
              : "Поставка разобрана"}
          </button>

          {status && <p className={styles.status}>{status}</p>}
        </>
      )}
    </div>
  );
};
