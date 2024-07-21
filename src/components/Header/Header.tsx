import { Tooltip as ReactTooltip, TooltipRefProps } from "react-tooltip";
import { AUTH_PAGE, ORDER_PAGE, ORDERS_PAGE, PROFILE_PAGE } from '../../router/paths';
import styles from "./Header.module.css";
import logo from '../../assets/icons/Logo_full.svg';
import Profile from '../../assets/icons/Profile.svg';
import List_arrow from '../../assets/icons/List_arrow.svg';
import Support from '../../assets/icons/Customer_support.svg';
import Telegram from '../../assets/icons/Telegram_icon.svg';
import Exit from '../../assets/icons/Exit.svg';
import Burger from '../../assets/icons/Burger_menu.svg';

import cn from "classnames"
import Button from "../../UI/Button/Button";
import { ButtonThemes } from "../../UI/Button/ButtonTypes";
import { useRef, useState } from "react";

const Header = () => {
    const poputchik_email: string = "poputchik@poputchik.ru";
    const poputchik_tg: string = "artemurav"

    const handleEMailClick = () => {
        window.location.href = `mailto:${poputchik_email}`;
    };

    const handleTGClick = () => {
        window.open(`https://t.me/${poputchik_tg}`, '_blank')
    };

    const handleGoToProfilePageClick = () => {
        window.location.href = PROFILE_PAGE;
    }

    const handleExitClick = () => {
        window.localStorage.removeItem('token');
        window.location.href = AUTH_PAGE;
    }

    const [dropdownState, setDropdownState] = useState(false);
    const handleChangeDropdownState = () => {
        setDropdownState(!dropdownState);
    }

    const tooltipRef1 = useRef<TooltipRefProps>(null)

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.centeredFrame}>
                <img className={styles.logo} src={logo}></img>
                <div className={cn(styles.linksSection, styles.onlyBigScreen)}>
                    <a href={ORDER_PAGE}><h3>Оформить заявку</h3></a>
                    <a href={ORDERS_PAGE}><h3>История заявок</h3></a>
                    <ReactTooltip
                        id="get-support-tooltip"
                        place="bottom"
                        className={styles.tooltip}
                        clickable={true}
                        noArrow={true}
                        offset={38}
                        opacity={1}
                        delayHide={200}
                        disableStyleInjection={true}
                    >
                        <h3 className={styles.tooltipRow} onClick={handleEMailClick}>
                            <img src={Support} />
                            <div>{poputchik_email}</div>
                        </h3>
                        <h3 className={styles.tooltipRow} onClick={handleTGClick}>
                            <img src={Telegram} />
                            @poputchik
                        </h3>
                    </ReactTooltip>
                    <h3 className={styles.support} data-tooltip-id="get-support-tooltip">
                        Поддержка
                        <img src={List_arrow} />
                    </h3>
                </div>
                <ReactTooltip
                    id="profile-options"
                    place="bottom"
                    className={cn(styles.tooltip, styles.littleTooltip)}
                    clickable={true}
                    noArrow={true}
                    offset={38}
                    opacity={1}
                    delayHide={200}
                    disableStyleInjection={true}
                    openEvents={{ ['click']: true }}
                    closeEvents={{ ['click']: true }}
                >
                    <Button buttonTheme={ButtonThemes.RED_FILLED} className={cn(styles.littleRow, styles.red)} onClick={handleGoToProfilePageClick}>
                        <img src={Profile} />
                        Личный кабинет
                    </Button>
                    <Button buttonTheme={ButtonThemes.RED} className={cn(styles.littleRow, styles.redText)} onClick={handleExitClick}>
                        <img src={Exit} />
                        Выйти из аккаунта
                    </Button>
                </ReactTooltip>
                <div className={cn(styles.profile, styles.onlyBigScreen)} data-tooltip-id="profile-options">
                    <h3>Иван</h3>
                    <img src={Profile} />
                </div>
                <ReactTooltip
                    id="mobile-sidebar"
                    ref={tooltipRef1}
                    place="top"
                    className={cn(styles.tooltip, styles.onlyLittleScreen)}
                    clickable={true}
                    noArrow={true}
                    offset={-100}
                    opacity={1}
                    delayHide={200}
                    disableStyleInjection={true}
                    openEvents={{ ['click']: true }}
                    closeEvents={{ ['click']: true }}
                >
                    <div className={styles.row}><a href={ORDER_PAGE}><h3>Оформить заявку</h3></a></div>
                    <div className={styles.row}><a href={ORDERS_PAGE}><h3>История заявок</h3></a></div>
                    <div className={cn(styles.sectionContainer, dropdownState ? styles.show : styles.hide)}>
                        <h3 className={styles.support} onClick={handleChangeDropdownState}>
                            Поддержка
                            <img src={List_arrow} />
                        </h3>
                        <div className={cn(styles.dropdownContent, dropdownState ? styles.show : styles.hide)}>
                            <h3 className={styles.littleRow} onClick={handleEMailClick}>
                                <img src={Support} />
                                <div>{poputchik_email}</div>
                            </h3>
                            <h3 className={styles.littleRow} onClick={handleTGClick} style={{ cursor: 'pointer' }}>
                                <img src={Telegram} />
                                @poputchik
                            </h3>
                        </div>
                    </div>

                    <div className={cn(styles.sectionContainer)}>
                        <div className={cn(styles.profile)} >
                            <h3>Иван Иванов</h3>
                        </div>
                        <div>
                            <Button buttonTheme={ButtonThemes.RED} className={cn(styles.littleRow, styles.redText)} onClick={handleGoToProfilePageClick}>
                                <img src={Profile} />
                                Личный кабинет
                            </Button>
                            <Button buttonTheme={ButtonThemes.RED} className={cn(styles.littleRow, styles.redText)} onClick={handleExitClick}>
                                <img src={Exit} />
                                Выйти из аккаунта
                            </Button>
                        </div>
                    </div>

                </ReactTooltip>
                <Button buttonTheme={ButtonThemes.RED} className={cn(styles.burger, styles.onlyLittleScreen)} data-tooltip-id="mobile-sidebar"
                    onClick={() => { if (tooltipRef1.current?.isOpen) tooltipRef1.current?.close() }}
                >
                    <img src={Burger} />
                </Button>

            </div>
        </div>
    );
};

export default Header;
