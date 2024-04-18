import Button from "../../UI/Button/Button";
import Submitter from "../Submitter/Submitter";
import EmailField from "./EmailField/EmailField";
import UseTermsField from "./UseTermsField/UseTermsField";
import PhoneNumberField from "./PhoneNumberField/PhoneNumberField";

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
            <Button buttonTheme="text_red" onClick={handleSwapButtonClick}>
                {!isAuthByEmail ? "Войти по почте" : "Войти по номеру"}
            </Button>
            <UseTermsField />
        </div>
    );
};

export default Body;
