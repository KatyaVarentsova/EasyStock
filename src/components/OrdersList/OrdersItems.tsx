//список заказов
import styles from './OrdersItems.module.css'
import { Link } from 'react-router-dom'

type OrdersItemsProps = {
    recordID: string;
    id: number;
    positions: number;
}

export const OrdersItem = ({recordID, id, positions}: OrdersItemsProps) => {
    return (
        <Link className={styles.order_link} to={`/orders/${recordID}` }>
        <li className={styles.order_item}>
            <p className={styles.text}>№ {id}</p>
            <p className={styles.text}>{positions} позиций</p>
          </li>
        </Link>
    )
}