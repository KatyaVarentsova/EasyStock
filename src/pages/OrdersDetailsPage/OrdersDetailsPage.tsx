import styles from './OrdersDetailsPage.module.css'
import { HomeLayout, OrdersDetails, Button } from '../../components';
import { useNavigate } from 'react-router-dom';


const ordersDetails = [
    {
        article: 38417593,
        section: '13#45',
        quantity: 15,
    },
    {
        article: 38417593,
        section: '13#45',
        quantity: 15,
    },
    {
        article: 38417593,
        section: '13#45',
        quantity: 15,
    }

]

export const OrdersDetailsPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/orders');
    }
    return (
        <HomeLayout>
            <div className={styles.container}>
                <h2>Детали заказа: </h2>
                <ul className={styles.order_list}>
                    {ordersDetails.map((order, i) => (
                        <OrdersDetails key={i} article={order.article} section={order.section} quantity={order.quantity}></OrdersDetails>
                    ))}
                </ul>
                <Button onClick={handleClick} className={styles.order_button}>Собрать</Button>
            </div>
        </HomeLayout>
    );
};