import { useMemo } from "react";
import { nanoid } from "nanoid";

import css from "./TextField.module.css";

const TextField = ({ handleChange, ...props }) => {
    const id = useMemo(() => nanoid(), []);

    return (
        <>
            <label htmlFor={id}>
                <input id={id} onChange={handleChange} {...props} className={css.form_input}></input>
            </label>
        </>
    );
};

export default TextField;