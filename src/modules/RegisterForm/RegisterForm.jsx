import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import useForm from "../../hooks/useForm";

import fields from "./fields";
import initialState from "./initialState";

import css from "./RegisterForm.module.css";

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { name, email, password } = state;

    return (
        <form onSubmit={handleSubmit} className={css.form_inner}>
            <h2 className={css.from_title}>Create account</h2>
            <TextField value={name} handleChange={handleChange} {...fields.name} />
            <TextField value={email} handleChange={handleChange} {...fields.email} />
            <TextField value={password} handleChange={handleChange} {...fields.password} />
            <Button>Register</Button>
            <p className={css.description}> Username must be in English.The password must be at least 8 characters long.</p>
        </form >
    );
};

export default RegisterForm;