import { EmailFieldValue } from "../hooks/types";

export const parseValue = (value: EmailFieldValue) => {
    if (value.length < defaultValue.length) {
        return defaultValue;
    }

    const matches = value.slice().match(/[0-9], [a-z], {@}/g);

    if (!matches) {
        return defaultValue;
    }

    let matchesString = matches.join("");

    if (matchesString.length > 10) {
        matchesString = matchesString.slice(0, 10);
    }

    return defaultValue;
};

export const defaultValue = "";
