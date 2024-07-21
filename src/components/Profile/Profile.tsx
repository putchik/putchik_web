import styles from "./Profile.module.css";
import container_styles from '../../UI/containers.module.css';
import cn from "classnames";
import ProfilePic from '/Profile.svg';
import IndividualProfile from "./IndividualProfile";
import PhysicalProfile from "./PhysicalProfile";
import Button from "../../UI/Button/Button";
import { ButtonThemes } from "../../UI/Button/ButtonTypes";

export interface UserInfo {
    email: string,
    phone: string,
    person: "individual" | "physical",
    companyName: string,
    companyINN: string,
    fullName: string,
}

const Profile = (props: { userInfo: UserInfo, handleInputChange: (name: string, value: string) => void }) => {
    return (
        <div className={styles.centeredFrame}>
            <div className={cn(container_styles.flex_row, container_styles.gap_10)} style={{ width: 300 }}>
                <img className={styles.basicIcon} src={ProfilePic}></img>
                <h2>Личный кабинет</h2>
            </div>
            {props.userInfo.person === "individual" ?
                <IndividualProfile userInfo={props.userInfo} handleInputChange={props.handleInputChange} />
                : <PhysicalProfile userInfo={props.userInfo} handleInputChange={props.handleInputChange} />}
            <Button buttonTheme={ButtonThemes.RED_FILLED}>Сохранить изменения</Button>
        </div>
    );
};

export default Profile;