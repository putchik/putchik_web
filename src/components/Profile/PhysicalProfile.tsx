import Input from "../../UI/Input/Input";
import PhoneInput from 'react-phone-input-2';
import styles from "./Profile.module.css";
import { InputThemes } from "../../UI/Input/InputTypes";
import { UserInfo } from "./Profile";
import { buttonStyle, containerStyle, inputStyle } from '../PhoneInputStyling';


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
                <PhoneInput
                    inputClass={styles.phone_input}
                    country={'ru'}
                    onlyCountries={['ru']}
                    disableDropdown
                    disableSearchIcon={true}
                    countryCodeEditable={false}
                    value={props.userInfo.phone}
                    placeholder={"+7 (999) 999-99-99"}
                    onChange={(phone: string) => { props.handleInputChange('phone', phone) }}
                    containerStyle={containerStyle}
                    buttonStyle={buttonStyle}
                    inputStyle={inputStyle}
                    inputProps={{
                        name: 'phone',
                        required: true,
                    }} />
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