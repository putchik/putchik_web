import { CheckboxInputProps } from "./types";

import styles from "./CheckboxInput.module.css";

const CheckboxInput = ({ label, checked, id }: CheckboxInputProps) => {
    return (
        <label className={styles.label}>
            <input type="checkbox" checked={checked} id={id} />
            {label}
        </label>
    );
};

export default CheckboxInput;
