import styles from "./Button.module.css";
import cn from "classnames";

import { ButtonProps } from "./types";

const Button = ({
    children,
    buttonTheme = "background_red",
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={cn(styles.button, styles[buttonTheme])}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
