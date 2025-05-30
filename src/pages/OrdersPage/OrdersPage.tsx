import styles from './OrdersPage.module.css'
import { HomeLayout, OrdersItem } from '../../components';
import { useEffect, useState } from 'react';
type RecordType = { 
  recordID: string;
  id: number; 
  positions: number; 
};


export const OrdersPage = () => {
  const [orders, setOrders] = useState<RecordType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://true.tabs.sale/fusion/v1/datasheets/dstl40zrXoH2HheDug/records?viewId=viwcis74pDXMT&fieldKey=name",
      {
        headers: {
          Authorization: 'Bearer uskZUWYuDIOPLDcwkxLEWfI',
        }
      }
      );
      const data = await res.json();
      const formatted = data.data.records.map((record: any) => ({
        recordID: record.recordId,
        id: record.fields.id,
        positions: record.fields["Выбор товаров"].length || 0
      }));
      setOrders(formatted);
    };
    fetchData();
  }, []);
  return (
    <HomeLayout>
      <div className={styles.container}>
        <h2>Заказы</h2>
        <ul className={styles.order_list}>
          {orders.length > 0 ? (
          orders.map((order, i) => (
            <OrdersItem key={i} recordID={order.recordID} id={order.id} positions={order.positions}></OrdersItem>
          ))) : (
            <li>Нет заказов</li>
          )} 
        </ul>
      </div>
    </HomeLayout>
  );
};