import Button from "../../../UI/Button/Button";
import { useFormContext } from "../../context";

const Submitter = () => {
    const {startFormSubmit} = useFormContext();

    return (
        <Button
            type="button"
            onClick={() => {
                startFormSubmit();
            }}
        >
            Далее
        </Button>
    );
};

export default Submitter;
