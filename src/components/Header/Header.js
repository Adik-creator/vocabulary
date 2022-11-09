import React, {useState} from "react";

import {
    AppBar, Box, Button,
    Drawer, IconButton, List,
    ListItemButton, ListItemIcon,
    ListItemText, Toolbar,
    Typography, useMediaQuery, useTheme,
} from "@mui/material";

import styles from './Header.module.css'
import {CustomLink} from "../CustomLink/CustomLink";
import MenuIcon from "@mui/icons-material/Menu";
import {DICTIONARY} from "../../utils/data";


const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <>
            <AppBar sx={{background: "#2f2f2f"}}>
                <Toolbar>
                    <CustomLink to={'/home'}>
                        <img src="/logo/logo.jpg" alt="logo" className={styles.logo}/>
                    </CustomLink>

                    <Typography sx={
                        isMatch ? {paddingLeft: "10%", fontWeight: 'bold', fontSize: 16} :
                            {
                                fontSize: 20,
                                fontWeight: 'bold',
                                paddingLeft: "10%"
                            }
                    }>
                        William and Zhanayim's class
                    </Typography>

                    <Drawer
                        anchor="left"
                        variant="temporary"
                        open={openDrawer}
                        onClose={() => setOpenDrawer(!openDrawer)}
                    >
                        <List sx={{marginLeft: '1rem'}}>

                            <Box sx={{marginBottom: '1rem'}}>
                                <Button sx={{marginLeft: "10px", backgroundColor: '#222'}} variant="contained">
                                    Login
                                </Button>
                                <Button sx={{marginLeft: "10px", backgroundColor: '#222'}} variant="contained">
                                    SignUp
                                </Button>
                            </Box>



                            <Button sx={{marginLeft: "10px", marginBottom: '1rem', backgroundColor: '#222'}} variant="contained">
                                <CustomLink to={'/irregular'}>irregular verbs</CustomLink>
                            </Button>
                            {Object.keys(DICTIONARY).map((day, index) => (
                                <ListItemButton key={index}>
                                    <CustomLink to={`days/${day}`}>
                                        <ListItemIcon
                                            sx={{width: 200, borderBottom: 1, borderColor: '#cccccc'}}
                                        >
                                            <ListItemText>{`day ${index + 1}`}</ListItemText>
                                        </ListItemIcon>
                                    </CustomLink>
                                </ListItemButton>
                            ))}
                        </List>
                    </Drawer>

                    <IconButton
                        sx={{color: "white", marginLeft: "auto"}}
                        onClick={() => setOpenDrawer(!openDrawer)}
                    >
                        <MenuIcon color="white" fontSize="large"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
};

export {Header};