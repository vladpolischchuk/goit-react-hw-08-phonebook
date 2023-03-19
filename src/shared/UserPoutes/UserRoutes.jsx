import css from "./UserRoutes.module.css";

import { lazy, Suspense } from "react";
import { ColorRing } from 'react-loader-spinner'
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicPoute/PublicPoute";

const HomePage = lazy(() => import("../../page/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() => import("../../page/NotFoundPage/NotFoundPage.jsx"));
const LoginPage = lazy(() => import("../../page/LoginPage/LoginPage.jsx"));
const RegisterPage = lazy(() => import("../../page/RegisterPage/RegisterPage.jsx"));
const PhonebookPage = lazy(() => import("../../page/PhonebookPage/PhonebookPage.jsx"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<div className={css.wrapper_loader}><ColorRing className={css.loader} /></div>}>
            <Routes>
                <Route index element={<HomePage />} />
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/phonebook" element={<PhonebookPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
};

export default UserRoutes;