import React from 'react';
import { makeStyles, darken } from '@material-ui/core/styles';
import brafikk_logo from '../assets_frontend/brafikk_logo.png';
import '../App.css';
import { AppBar, Toolbar, IconButton, InputBase } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    logo: {
        maxWidth: 90,
        marginRight: theme.spacing(0.5),
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function TopHeader() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar variant="elevation" elevation={1} position="static" color="transparent">
                <Toolbar>
                    <img className={classes.logo} alt="brafikk" src={brafikk_logo} />
                    <div className={classes.grow} />
                    <div className={classes.sectionMobile}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            component={Link}
                            to="/settingspage"
                        >
                            <SettingsIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
