import { Suspense, useLayoutEffect } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from "../pages/dashboard";
import User from "../pages/user";
import Settings from "../pages/settings";
import NavItems from "../data/constants/NavItems";
import Login from "../pages/login";
import Missing from "../pages/missing";
import Unauthorized from "../pages/unauthorized";
import RequireAuth from "../components/authentication/RequireAuth";
import Roles from "../data/constants/Roles";
import PersistLogin from "../components/authentication/PersistLogin";
import UserList from "../pages/user/userlist";

const Pages = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Suspense fallback={<div />}>
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="unauthorized" element={<Unauthorized />} />

                    <Route path="/" element={<Navigate to={NavItems.dashboard} />} />
                    <Route path={NavItems.dashboard} element={<Dashboard />} ></Route>

                    <Route element={<PersistLogin />}>
                        <Route element={<RequireAuth allowedRoles={[Roles.user]} />}>
                            <Route path={NavItems.user} element={<User />}></Route>
                        </Route>
                        <Route element={<RequireAuth allowedRoles={[Roles.settings]} />}>
                            <Route path={NavItems.userlist} element={<UserList/>}></Route>
                        </Route>
                        <Route element={<RequireAuth allowedRoles={[Roles.settings]} />}>
                            <Route path={NavItems.settings} element={<Settings />}></Route>
                        </Route>

                        <Route path="*" element={<Missing />} />
                    </Route>

                </Routes>
        </Suspense>
    );
};

export default Pages;