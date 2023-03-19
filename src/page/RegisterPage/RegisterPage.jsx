import { useDispatch } from "react-redux";

import { signUp } from "../../redux/auth/auth-operations";

import RegisterForm from "../../modules/RegisterForm/RegisterForm";

import css from "./RegisterPage.module.css";

const HomePage = () => {
    const dispatch = useDispatch();

    const handleSignUp = (data) => {

        dispatch(signUp(data));
    };

    return (
        <div className={css.form}>
            <div className={`${css.circle1} ${css.circle}`}></div>
            <div className={`${css.circle2} ${css.circle}`}></div>
            <div className={`${css.circle3} ${css.circle}`}></div>
            <div className={`${css.circle4} ${css.circle}`}></div>
            <RegisterForm onSubmit={handleSignUp} />
        </div>
    );
};

export default HomePage;