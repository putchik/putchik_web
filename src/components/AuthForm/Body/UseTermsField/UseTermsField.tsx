import CheckboxInput from "../../../UI/CheckboxInput/CheckboxInput";

const UseTermsField = () => {
    return (
        <CheckboxInput
            checked={true}
            id=""
            label={
                <span style={{ fontFamily: "inherit" }}>
                    Согласен с{" "}
                    <a
                        style={{ fontFamily: "inherit" }}
                        href="https://ya.ru/?neuro=1"
                    >
                        правилами использования
                    </a>
                </span>
            }
        />
    );
};

export default UseTermsField;
