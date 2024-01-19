import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useLocation } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TopNavbar from "./TopNavbar";
import MenuList from "../../data/constants/Menu"
import MenuItemsList from "./MenuItemsList";

interface INavItems {
    route: string,
    name: string,
    icon: JSX.Element
};

interface Props {
    window?: () => Window;
};

const drawerWidth = 240;

const Navbar = (props: Props) => {

    let navItems: INavItems[] = [];
    MenuList.map(obj => {
        navItems.push({ "route": obj.route ?? "", "name": obj.name, icon: <obj.Icon /> });
    });

    const { pathname } = useLocation();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const newList = MenuList;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                React Sample
            </Typography>
            <Divider />
            <MenuItemsList items={newList} />
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        React Sample
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                startIcon={item.icon}
                                variant={pathname === item.route ? "contained" : "outlined"}
                                component={Link}
                                to={item.route}
                                key={item.name}
                                sx={{ m: '1rem', color: '#fff' }} >
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                    <TopNavbar />
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}>

                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};

export default Navbar;