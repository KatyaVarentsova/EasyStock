//список заказов
import styles from './OrdersItems.module.css'
import { Link } from 'react-router-dom'

type OrdersItemsProps = {
    number: number;
    positions: number;
}

export const OrdersItem = ({number, positions}: OrdersItemsProps) => {
    return (
        <Link className={styles.order_link} to={`/orders/${number}`}>
        <li className={styles.order_item}>
            <p className={styles.text}>№ {number}</p>
            <p className={styles.text}>{positions} позиций</p>
          </li>
        </Link>
    )
}