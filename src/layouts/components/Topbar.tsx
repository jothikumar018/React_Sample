import { useDrawerContext } from "../../context/drawer-context"
import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import TopNavbar from "./TopNavbar";


const Topbar = () => {
    const { isOpened, toggleIsOpened } = useDrawerContext();
    const theme = useTheme();

    return (
        <AppBar sx={{ backgroundColor: 'primary.dark', color: 'secondary.contrastText' }}>
            <Toolbar>
                <IconButton color="inherit"
                    onClick={() => toggleIsOpened(!isOpened)}
                    sx={{ padding: theme.spacing(1) }}>
                    {isOpened ? <MenuOpenIcon /> : <MenuIcon />}
                </IconButton>
                <Typography>
                    React Sample
                </Typography>
                <TopNavbar />
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;