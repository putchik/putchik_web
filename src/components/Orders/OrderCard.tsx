import styles from "./OrdersLog.module.css";
import container_styles from '../../UI/containers.module.css';
import calendar from '/Calendar.svg';
import path from '/Path.svg';
import volume from '/Volume.svg';
import weight from '/Weight.svg';
import cargo from '/Cargo.svg';
import pathArrow from '/Path_arrow.svg';

import cn from "classnames";
import RedBox from "./RedBox";
import Order from "./OrderModel";
import OrderStatus from "./OrderStatus";

const OrderCard = (props: { order: Order }) => {
    return (
        <div className={styles.centeredFrameSmall}>
            <div className={styles.infoAndPriceContainer}>
                <div className={cn(container_styles.flex_col, container_styles.gap_20)} style={{ maxWidth: 'none' }} >
                    <div className={styles.cardHeaderContainer}>
                        <div className={cn(container_styles.flex_row, container_styles.gap_20)}>
                            <h3>{props.order.readable_id}</h3>
                            <div className={cn(styles.text, styles.date)} >
                                <img className={styles.calendarImage} src={calendar} />
                                22.01.2024
                            </div>
                        </div>
                        <OrderStatus status={props.order.status} />
                    </div>

                    <div className={cn(container_styles.flex_row, container_styles.gap_10)} style={{ maxWidth: 500, flexWrap: 'wrap' }}>
                        <RedBox startImgSrc={path} text="120 км" done={props.order.status == "done"}/>
                        <RedBox startImgSrc={volume} text="12 м³" done={props.order.status == "done"}/>
                        <RedBox startImgSrc={weight} text="70 кг" done={props.order.status == "done"}/>
                        <RedBox startImgSrc={cargo} text="Чемоданы" done={props.order.status == "done"}/>
                    </div>

                    <div className={styles.pathContainer}>
                        <div>
                            <div style={{ fontWeight: 500, fontSize: '15px', lineHeight: '17px' }}>Москва</div>
                            <div className="hint" style={{ wordBreak: 'break-word' }}>ул. Пушкина 13, д. Колотушкина-Пушкина 31</div>
                        </div>
                        <img src={pathArrow} className={styles.arrowImage} />
                        <div>
                            <div style={{ fontWeight: 500, fontSize: '15px', lineHeight: '17px' }}>Москва</div>
                            <div className="hint" style={{ wordBreak: 'break-word' }}>ул. Ковбоев 18, д. Коровников-Дворников 22</div>
                        </div>
                    </div>
                </div>

                <div className={styles.priceAndRepeatContainer}>
                    <div style={{ marginBlock: 'auto' }}>
                        <h2 className={styles.price}>{props.order.cost + " ₽"}</h2>
                        <div className="hint">с НДС</div>
                    </div>

                    <div className={styles.redText}>Повторить</div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;