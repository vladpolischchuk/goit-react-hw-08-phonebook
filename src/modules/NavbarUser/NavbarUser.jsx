import { useSelector, useDispatch } from "react-redux";

import { signOut } from "redux/auth/auth-operations.js";
import { getUser } from "../../redux/auth/auth-selector.js";

import css from "./NavbarUser.module.css";

const NavbarUser = () => {
    const { email } = useSelector(getUser);
    const dispatch = useDispatch();

    const onSignOut = () => {
        dispatch(signOut());
    }

    return (
        <>
            <p className={css.user_name}>{email}</p> <button className={css.button} onClick={onSignOut} >Sign out</button>
        </>
    );
};

export default NavbarUser;