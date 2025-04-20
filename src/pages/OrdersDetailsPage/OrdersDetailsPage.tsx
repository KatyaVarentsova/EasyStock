import styles from './OrdersDetailsPage.module.css'
import { HomeLayout, OrdersDetails, Button } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchOrdersAndGoods } from "@/api/apiOrders";
import { useEffect, useState } from 'react';


export const OrdersDetailsPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/orders');
    }
    const [ordersList, setOrdersList] = useState<{ recordID: string; orderID: number; goods: { recordID: string; id: number; location: string; quantity: number}[];}[]>([]);

    useEffect(() => {
        fetchOrdersAndGoods().then(({ orders, goods }) => {
            const listG = goods.data.records.map((item: any) => ({
                recordID: item.recordId,
                id: item.fields.id,
                location: item.fields.location
            }));
            const listO = orders.data.records.map((item: any) => {
                const selectedGoods = item.fields["Выбор товаров"].map((recordID: string) => {
                    const good = listG.find(g => g.recordID === recordID);
                    const quantityKey = String(good?.id);
                    const quantity = item.fields[quantityKey];
                    return {
                        recordID: good?.recordID,
                        id: good?.id,
                        location: good?.location,
                        quantity: quantity || 0,
                    };
                });
                return {
                    recordID: item.recordId,
                    orderId: item.fields.id,
                    goods: selectedGoods,
                };
            });
            setOrdersList(listO);
        });
    }, []);

    const { recordID } = useParams();
    useEffect(() => {
    }, [recordID]);

    const currentOrder = ordersList.find(order => order.recordID === recordID);
    console.log(currentOrder)
    

    return (
        <HomeLayout>
            <div>
                <h2>Детали заказа: </h2>
                <ul className={styles.order_list}>
                    {currentOrder?.goods.map((good, i) => (
                        <OrdersDetails key={i} article={good.id} section={good.location} quantity={good.quantity}/>
                    ))}
                </ul>
                <Button onClick={handleClick} className={styles.order_button}>Собрать</Button>
            </div>
        </HomeLayout>
    );
};