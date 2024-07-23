import styles from "../Orders/OrdersLog.module.css";
import container_styles from '../../UI/containers.module.css'
import ordersStory from '../../assets/icons/Time.svg'
import cn from "classnames"
import Order from "../Orders/OrderModel";
import OrderCard from "../Orders/OrderCard";
import { UserWithOrders } from "../Orders/OrderModel";

const AdminOrdersLog = (props: { orderList: UserWithOrders[] }) => {
    return (
        <div className={styles.centeredFrame}>
            <div className={cn(container_styles.flex_row, container_styles.gap_10)}>
                <img className={styles.basicIcon} src={ordersStory}></img>
                <h2>История заявок всех пользователей</h2>
            </div>
            <div className={styles.orderListContainer}>
                {
                    props.orderList.map((user: UserWithOrders, i: number) => (
                        <div key={'user-' + user.id}>
                            <h3>
                                {`Пользователь: ${user.is_organization_account ? user.organization?.organization_name : user.name}`}
                            </h3>
                            
                            {
                                
                                // user?.orderResponse?.orders?.map((order: Order) => <OrderCard order={order} key={i} />)
                                // user.orderResponse.orders.map((order: Order, i: number) => (
                                //     <OrderCard order={order} key={i} />
                                // ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AdminOrdersLog;