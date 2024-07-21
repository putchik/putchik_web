import styles from "./OrdersLog.module.css";
import Confirmed from "/Confirmed_2.svg";
import On_the_way from "/On_the_way.svg";
import Flag from "/Flag.svg";
import Dashed_line from "/Dashed_line.svg";
import Line from "/Line.svg";

import cn from "classnames";


const OrderStatus = (props: { status: string }) => {
    return (
        // "confirmed" | "in_process" | "done"
        <div className={styles.orderStatusContainer}>
            <img src={Confirmed} className={cn(styles.img, (props.status == "confirmed" ? styles.active : styles.inactive))} style={{ height: 14}}/>
            <img src={props.status == "confirmed" ? Dashed_line : Line} className={cn(styles.line, (props.status == "confirmed" ? styles.active : styles.inactive))} />
            <img src={On_the_way} className={cn(styles.img, (props.status == "in_process" ? styles.active : styles.inactive))} />
            <img src={props.status == "in_process" ? Dashed_line : Line} className={cn(styles.line, (props.status == "in_process" ? styles.active : styles.inactive))} />
            <img src={Flag} className={cn(styles.img, styles.inactive)} />
            <div className="hint">{props.status == "done" ? "Заявка завершена": "Заявка принята"}</div>
        </div>
    )
}

export default OrderStatus;