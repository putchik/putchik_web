import styles from "./Button.module.css";
import cn from "classnames";

import { ButtonProps } from "./types";

const Button = ({ children, buttonTheme = "background_red" }: ButtonProps) => {
    return (
        <button className={cn(styles.button, styles[buttonTheme])}>
            {children}
        </button>
    );
};

export default Button;
