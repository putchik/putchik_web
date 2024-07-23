import Input from "../../UI/Input/Input";
import styles from "./Profile.module.css";
import { InputThemes } from "../../UI/Input/InputTypes";
import { UserInfo } from "./Profile";
import CustomPhoneInput from "../../UI/Input/CustomPhoneInput";


const PhysicalProfile = (props: { userInfo: UserInfo, handleInputChange: (name: string, value: string) => void }) => {
    return (
        <div className={styles.inputWrapper}>
            <div className={styles.inputContainer}>
                <h3>ФИО</h3>
                <Input
                    inputTheme={InputThemes.RED}
                    value={props.userInfo.fullName}
                    name="fullName"
                    style={{ textTransform: 'capitalize' }}
                    onChange={(e: any) => { props.handleInputChange('fullName', e.target.value) }} />
            </div>

            <div className={styles.inputContainer}>
                <h3>Номер телефона</h3>
                <CustomPhoneInput
                    phone={props.userInfo.phone}
                    onChange={(phone: string) => { props.handleInputChange('phone', phone)}} />
            </div>
            <div className={styles.inputContainer}>
                <h3>Почта</h3>
                <Input
                    inputTheme={InputThemes.RED}
                    value={props.userInfo.email}
                    name="email"
                    onChange={(e: any) => { props.handleInputChange('email', e.target.value) }} />
            </div>
        </div>
    );
};

export default PhysicalProfile;