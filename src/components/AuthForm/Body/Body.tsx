import Button from "../../UI/Button/Button";
import Submitter from "../Submitter/Submitter";
import EmailField from "./EmailField/EmailField";
import UseTermsField from "./UseTermsField/UseTermsField";

import styles from "./Body.module.css";

const Body = () => {
    return (
        <div className={styles.wrapper}>
            <EmailField />
            <Submitter />
            <Button buttonTheme="text_red">Войти по почте</Button>
            <UseTermsField />
        </div>
    );
};

export default Body;
