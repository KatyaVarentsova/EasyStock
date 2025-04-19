import styles from './OrdersPage.module.css'
import { HomeLayout, OrdersItem } from '../../components';

const orders = [
  {
    number: 10,
    positions: 15
  },
  {
    number: 11,
    positions: 7
  },
  {
    number: 12,
    positions: 16
  }

]

export const OrdersPage = () => {
  return (
    <HomeLayout>
      <div className={styles.container}>
        <h2>Заказы</h2>
        <ul className={styles.order_list}>
          {orders.map((order, i) => (
            <OrdersItem key={i} number={order.number} positions={order.positions}></OrdersItem>
          ))}
        </ul>
      </div>
    </HomeLayout>
  );
};