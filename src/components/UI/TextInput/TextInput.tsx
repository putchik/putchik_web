import styles from "./TextInput.module.css";
import { TextInputProps } from "./types";

const TextInput = ({ value, id, ...props }: TextInputProps) => {
    return (
        <input
            {...props}
            name={id}
            id={id}
            value={value}
            className={styles.input}
            type="text"
        />
    );
};

export default TextInput;
