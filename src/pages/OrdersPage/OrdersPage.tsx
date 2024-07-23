import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./OrdersPage.module.css";
import Header from "../../components/Header/Header";
import Order, { OrderResponse } from "../../components/Orders/OrderModel";
import OrdersLog from "../../components/Orders/OrdersLog";
import fetchGetUserOrders from "../../fetch_functions/fetchGetUserOrders";

const OrdersPage = () => {
  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const location = useLocation();

  useEffect(() => {
    fetchGetUserOrders()
      .then((data: OrderResponse) => {
        console.log(data);
        setOrdersList(data.orders);
      });
  }, []);

  useEffect(() => {
    if (location.state) {
      const newOrder = location.state.newOrder as Order;
      const updatedOrder = location.state.updatedOrder as Order;

      if (newOrder) {
        setOrdersList(prevOrders => [...prevOrders, newOrder]);
      }

      if (updatedOrder) {
        setOrdersList(prevOrders =>
          prevOrders.map(order => (order.id === updatedOrder.id ? updatedOrder : order))
        );
      }
    }
  }, [location.state]);

  return (
    <div className={styles.page}>
      <Header />
      {ordersList.length > 0 ?
        <OrdersLog orderList={ordersList} />
        : <h3>История заявок пуста</h3>
      }
    </div>
  );
};

export default OrdersPage;
