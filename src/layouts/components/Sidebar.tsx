import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDrawerContext } from "../../context/drawer-context"
import MenuItemsList from './MenuItemsList';

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'isOpened',
})<{ isOpened: boolean }>(({ isOpened, theme }) => ({
    width: isOpened ? 240 : theme.spacing(7),
    overflow: 'auto',
    transition: isOpened
        ? theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
        : theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    '& .MuiDrawer-paper': {
        background: '#D8DCD6',
        position: 'static',
        overflowX: 'hidden'
    },
}));

const Sidebar = () => {

    const theme = useTheme();
    const { isOpened, toggleIsOpened, menu } = useDrawerContext();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
    
    return (
        <Drawer
            variant={isLargeScreen ? 'permanent' : 'temporary'}
            open={!isLargeScreen && isOpened ? true : false}
            onClose={() => toggleIsOpened(!isOpened)}
            isOpened={isOpened}
        >
            <MenuItemsList items={menu}/>
        </Drawer>
    );
};

export default Sidebar;