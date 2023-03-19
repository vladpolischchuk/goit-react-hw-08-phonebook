import { useDispatch } from "react-redux";

import { signIn } from "../../redux/auth/auth-operations";

import LoginForm from "../../modules/LoginForm/LoginForm";

import css from "./LoginPage.module.css";

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleSignIn = (data) => {
        dispatch(signIn(data));
    };

    return (
        <div className={css.form}>
            <div className={`${css.circle1} ${css.circle}`}></div>
            <div className={`${css.circle2} ${css.circle}`}></div>
            <div className={`${css.circle3} ${css.circle}`}></div>
            <div className={`${css.circle4} ${css.circle}`}></div>
            <LoginForm onSubmit={handleSignIn} />
        </div>
    );
};

export default LoginPage;