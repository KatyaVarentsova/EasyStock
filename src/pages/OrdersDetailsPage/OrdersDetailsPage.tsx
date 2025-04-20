import styles from './OrdersDetailsPage.module.css'
import { HomeLayout, OrdersDetails, Button } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchOrdersAndGoods } from "@/api/apiOrders";
import { useEffect, useState } from 'react';


export const OrdersDetailsPage = () => {
    const navigate = useNavigate();

    const { recordID } = useParams();
    useEffect(() => {
    }, [recordID]);
    const handleClickDelete = async (recordID: string) => {
        if (!recordID) return;
        try {
            const response = await fetch(`https://true.tabs.sale/fusion/v1/datasheets/dstl40zrXoH2HheDug/records?recordIds=${recordID}`, {
                method: 'DELETE',
                headers: {
                    Authorization: "Bearer uskZUWYuDIOPLDcwkxLEWfI"
                }
            });
            if (response.ok) {
                navigate('/orders');
                handleCollect();
            } else {
                console.error('Ошибка при удаление товара')
            }
        } catch (error) {
            console.error("Ошибка запроса:", error)
        }
        
    };

    const [ordersList, setOrdersList] = useState<{ recordID: string; orderID: number; goods: { recordID: string; id: number; location: string; count:number; quantity: number, result:number}[];}[]>([]);

    useEffect(() => {
        fetchOrdersAndGoods().then(({ orders, goods }) => {
            const listG = goods.data.records.map((item: any) => ({
                recordID: item.recordId,
                id: item.fields.id,
                location: item.fields.location,
                count: item.fields.count,
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
                        count: good?.count,
                        quantity: quantity || 0,
                        result: (good?.count) - (quantity || 0),
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

    const currentOrder = ordersList.find(order => order.recordID === recordID);  
    const updateCounts = async (recordId:string, result:number) => {
        await fetch(
          "https://true.tabs.sale/fusion/v1/datasheets/dstXFd44w7UBFj1Hto/records?viewId=viweo1seC0aMx&fieldKey=name",
          {
            method: "PATCH",
            headers: {
              "Authorization": "Bearer uskZUWYuDIOPLDcwkxLEWfI",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              records: [
                {
                  recordId: recordId,
                  fields: {
                    count: result,
                  },
                },
              ],
            }),
          }
        );
      };
      function handleCollect() {
        currentOrder?.goods.map((good) => (
            updateCounts(good.recordID, good.result)
          ))
      }
      
    return (
        <HomeLayout>
            <div>
                <h2>Детали заказа: </h2>
                <ul className={styles.order_list}>
                    {currentOrder?.goods.map((good, i) => (
                        <OrdersDetails key={i} article={good.id} section={good.location} quantity={good.quantity}/>
                    ))}
                </ul>
                <Button onClick={() => handleClickDelete(recordID!)} className={styles.order_button}>Собрать</Button>
            </div>
        </HomeLayout>
    );
};