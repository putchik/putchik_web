import styles from "./OrdersLog.module.css";
import container_styles from '../../UI/containers.module.css';
import calendar from '../../assets/icons/Calendar.svg';
import path from '../../assets/icons/Path.svg';
import volume from '../../assets/icons/Volume.svg';
import weight from '../../assets/icons/Weight.svg';
import cargo from '../../assets/icons/Cargo.svg';
import pathArrow from '../../assets/icons/Path_arrow.svg';
import temp from '../../assets/icons/Temp_regime.svg';

import cn from "classnames";
import RedBox from "./RedBox";
import Order from "./OrderModel";
import OrderStatus from "./OrderStatus";
import formatDate from "../dateFormatter";

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
                                {formatDate(props.order.created_at)}
                            </div>
                        </div>
                        <OrderStatus status={props.order.status} />
                    </div>

                    <div className={cn(container_styles.flex_row, container_styles.gap_10)} style={{ maxWidth: 500, flexWrap: 'wrap' }}>
                        <RedBox startImgSrc={path} text={`${props.order.distance.toString()} км`} done={props.order.status == "Delivered"} />
                        <RedBox startImgSrc={volume} text={`${props.order.amount} м³`} done={props.order.status == "Delivered"} />
                        <RedBox startImgSrc={weight} text={`${props.order.weight} кг`} done={props.order.status == "Delivered"} />
                        <RedBox startImgSrc={cargo} endImgSrc={temp} text={props.order.cargo} done={props.order.status == "Delivered"} />
                    </div>

                    <div className={styles.pathContainer}>
                        <div>
                            <div style={{ fontWeight: 500, fontSize: '15px', lineHeight: '17px' }}>{props.order.loading_points[0].locality}</div>
                            <div className="hint" style={{ wordBreak: 'break-word' }}>{props.order.loading_points[0].address}</div>
                        </div>
                        <img src={pathArrow} className={styles.arrowImage} />
                        <div>
                            <div style={{ fontWeight: 500, fontSize: '15px', lineHeight: '17px' }}>{props.order.unloading_points[0].locality}</div>
                            <div className="hint" style={{ wordBreak: 'break-word' }}>{props.order.unloading_points[0].address}</div>
                        </div>
                    </div>
                </div>

                <div className={styles.priceAndRepeatContainer}>
                    <div style={{ marginBlock: 'auto' }}>
                        <h2 className={styles.price}>{`${props.order.cost} ₽`}</h2>
                        <div className="hint">с НДС</div>
                    </div>

                    <div className={styles.redText}>Повторить</div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;