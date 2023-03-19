import {
    SiBookmyshow
} from 'react-icons/si';
import { Suspense } from "react";
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarAuth from "../NavbarAuth/NavbarAuth";
import NavbarUser from '../NavbarUser/NavbarUser';

import { isUserLogin } from '../../redux/auth/auth-selector';

import css from "./NavbarMenu.module.css";

const NavbarMenu = () => {
    const isLogin = useSelector(isUserLogin);

    return (
        <div className={css.wrapper} >
            <NavLink className={css.link_logo} to="">
                < SiBookmyshow size={"35px"} className={css.logo} />
            </NavLink>
            {!isLogin && <NavbarAuth />}
            {isLogin && <NavbarUser />}
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default NavbarMenu;