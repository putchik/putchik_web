import styles from "./OrdersPage.module.css";
import Header from "../../components/Header/Header";
import Order, { OrderResponse } from "../../components/Orders/OrderModel";
import OrdersLog from "../../components/Orders/OrdersLog";
import { useEffect, useState } from "react";
import fetchGetUserOrders from "../../fetch_functions/fetchGetUserOrders";

const OrdersPage = () => {
    useEffect(() => {
        fetchGetUserOrders()
            .then((data: OrderResponse) => {
                console.log(data);
                setOrdersList(data.orders);
            })
    }, [])

    const [ordersList, setOrdersList] = useState<Order[]>()

    // const ordersList: Order[] = [
    //     {
    //         id: 1,
    //         readable_id: "#FW21244",
    //         customer_id: 1,
    //         cargo: "Чемоданы",
    //         created_at: "2024-07-14T10:51:39.533Z",
    //         cost: 15000,
    //         distance: 1220,
    //         weight: 5,
    //         amount: 2,
    //         temperature_condition: true,
    //         status: "Transit",
    //         loading_points: [
    //             {
    //                 locality: "Москва",
    //                 address: "Невский проспект 1",
    //                 phone: "+79999999999"
    //             }
    //         ],
    //         unloading_points: [
    //             {
    //                 locality: "Санкт-Петербург",
    //                 address: "Невский проспект 1",
    //                 phone: "+79999999999"
    //             }
    //         ]
    //     },
    //     {
    //         id: 1,
    //         readable_id: "#FW21245",
    //         customer_id: 1,
    //         cargo: "Чемоданы",
    //         created_at: "2024-07-14T10:51:39.533Z",
    //         cost: 15000,
    //         distance: 1220,
    //         weight: 5,
    //         amount: 2,
    //         temperature_condition: true,
    //         status: "done",
    //         loading_points: [
    //             {
    //                 locality: "Москва",
    //                 address: "Невский проспект 1",
    //                 phone: "+79999999999"
    //             }
    //         ],
    //         unloading_points: [
    //             {
    //                 locality: "Санкт-Петербург",
    //                 address: "Невский проспект 1",
    //                 phone: "+79999999999"
    //             }
    //         ]
    //     }
    // ]

    return (
        <div className={styles.page}>
            <Header />
            {ordersList ?
                <OrdersLog orderList={ordersList} />
                : <h3>История заявок пуста</h3>
            }
        </div>
    );
};

export default OrdersPage;
