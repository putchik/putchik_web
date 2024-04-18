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
            <Button>Далее</Button>
            <UseTermsField />
            <Button buttonTheme="text_red">Войти по почте</Button>
        </div>
    );
};

export default Body;
