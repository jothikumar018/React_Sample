import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';

import Avatar from '@mui/material/Avatar';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';

import { ColorModeContext } from "./PageContainer";
import useLogout from "../../hooks/authentication/useLogout";

const TopNavbar = () => {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const { pathname } = useLocation();

    const navigate = useNavigate();
    const logout = useLogout();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = (name: string) => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const signOut = async () => {
        logout();
        navigate('/login');
    }

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem
                selected={pathname === "/User"}
                component={Link}
                to="User" >
                <Avatar /> Profile
            </MenuItem>
            <Divider />
            <MenuItem
                selected={pathname === "/Settings"}
                component={Link}
                to="Settings" >
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={signOut}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    );

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton color="inherit"
                    aria-controls={menuId}
                    onClick={handleProfileMenuOpen}>
                    <AccountCircle />
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    onClick={colorMode.toggleColorMode}
                    color="inherit">
                    {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
                </IconButton>
            </MenuItem>
        </Menu>
    );

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Tooltip title={theme.palette.mode}>
                    <IconButton sx={{ ml: 1 }}
                        onClick={colorMode.toggleColorMode}
                        color="inherit">
                        {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
                    </IconButton>
                </Tooltip>
                <Tooltip title="Notifications">
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Account settings">
                    <IconButton color="inherit"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}>
                        <AccountCircle />
                    </IconButton>
                </Tooltip>
            </Box>
            {renderMobileMenu}
            {renderMenu}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
            </Box>
        </React.Fragment>
    );
};

export default TopNavbar;