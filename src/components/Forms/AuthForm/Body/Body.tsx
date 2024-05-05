import Button from "../../../UI/Buttons/Button/Button";
import Submitter from "../Submitter/Submitter";
import EmailField from "../../FormFields/EmailField/EmailField";
import UseTermsField from "../../FormFields/UseTermsField/UseTermsField";
import PhoneNumberField from "../../FormFields/PhoneNumberField/PhoneNumberField";

import styles from "./Body.module.css";
import { useState } from "react";

const Body = () => {
    const [isAuthByEmail, setIsAuthByEmail] = useState(false);

    const handleSwapButtonClick = () => {
        setIsAuthByEmail(!isAuthByEmail);
    };

    return (
        <div className={styles.wrapper}>
            {isAuthByEmail && <EmailField />}
            {!isAuthByEmail && <PhoneNumberField />}
            <Submitter />
            <Button
                type="button"
                buttonTheme="text_red"
                onClick={handleSwapButtonClick}
            >
                {!isAuthByEmail ? "Войти по почте" : "Войти по номеру"}
            </Button>
            <UseTermsField />
        </div>
    );
};

export default Body;
