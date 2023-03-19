import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import useForm from "../../hooks/useForm";

import fields from "./fields";
import initialState from "./initialState";

import css from "./LoginForm.module.css";

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { email, password } = state;

    return (
        <form onSubmit={handleSubmit} className={css.form_inner}>
            <h2 className={css.from_title}>Welcome back</h2>
            <TextField value={email} handleChange={handleChange} {...fields.email} />
            <TextField value={password} handleChange={handleChange} {...fields.password} />
            <Button>Sign in</Button>
        </form >
    );
};

export default LoginForm;