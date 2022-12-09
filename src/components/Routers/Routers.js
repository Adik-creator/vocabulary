import React from 'react';

import {Route, Routes} from "react-router-dom";
import {Layout} from "../Layout";
import {Day} from "../Day";
import {IrregularVerbs} from "../IrregularVerbs";
import {HomePage} from "../../pages/HomePage";
import LogOut from "../User/LogOut/LogOut";
import Login from "../User/LogIn/Login";
import {NotFoundPage} from "../../pages/NotFoundPage/NotFoundPage";
import {Todo} from "../Todo/Todo";

const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'days/:day'} element={<Day/>}/>
                <Route path={'irregular'} element={<IrregularVerbs />}/>
                <Route path={'logout'} element={<LogOut/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'todo'} element={<Todo/>} />
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {Routers};