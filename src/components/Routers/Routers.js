import React from 'react';

import {Route, Routes} from "react-router-dom";
import {Layout} from "../Layout";
import {Day} from "../Day";
import {HomePage} from "../../pages";

const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'days/:day'} element={<Day/>}/>
            </Route>
        </Routes>
    );
};

export {Routers};