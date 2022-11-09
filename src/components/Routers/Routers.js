import React from 'react';

import {Route, Routes} from "react-router-dom";
import {Layout} from "../Layout";
import {Day} from "../Day";
import {HomePage} from "../../pages";
import {IrregularVerbs} from "../IrregularVerbs";

const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'days/:day'} element={<Day/>}/>
                <Route path={'irregular'} element={<IrregularVerbs />}/>
            </Route>
        </Routes>
    );
};

export {Routers};