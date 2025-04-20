import styles from './OrdersItems.module.css'




type OrdersItemsProps = {
    article: number;
    section: string;
    quantity: number;
}

export const OrdersDetails = ({ article, section, quantity}: OrdersItemsProps) => {
    
    return (
        <li className={styles.item_details}>
            <p className={styles.details_text}>Секция {section}</p>
            <p className={styles.details_text}> Артикул {article}</p>
            <p className={styles.details_text}>{quantity} шт</p>
        </li>
    )
}