import React, {useState} from 'react';
import {Button} from "@mui/material";
import {Modal} from "../../Modal";

const LogOut = () => {

    const [modalActive, setModalActive] = useState(true)

    return (
        <div>
            <div>
                <Button
                    variant="contained"
                    size="medium"
                    onClick={() => setModalActive(true)}
                >
                    modal window
                </Button>
                <Modal active={modalActive} setActive={setModalActive}/>
            </div>
        </div>
    );
};

export default LogOut;