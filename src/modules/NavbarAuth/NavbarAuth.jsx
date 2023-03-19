import { NavLink } from "react-router-dom";

import css from "./NavbarAuth.module.css";

const NavbarAuth = () => {
    return (
        <>
            <NavLink className={css.nav_link} to="/register">
                Register
            </NavLink> |
            <NavLink className={css.nav_link} to="/login" >
                Sign in
            </NavLink>
        </>
    );
};

export default NavbarAuth;