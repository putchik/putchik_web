import Button from "../../UI/Button/Button";
import Submitter from "../Submitter/Submitter";
import EmailField from "./EmailField/EmailField";
import UseTermsField from "./UseTermsField/UseTermsField";

const Body = () => {
    return (
        <>
            <EmailField />
            <Submitter />
            <Button />
            <UseTermsField />
        </>
    );
};

export default Body;