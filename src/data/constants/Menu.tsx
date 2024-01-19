import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Settings from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';

import NavItems from "./NavItems";
import { IMenuItem } from "../../types"

const MenuList: IMenuItem[] = [
    {
        route: NavItems.dashboard,
        name: 'Dashboard',
        Icon: DashboardIcon,
    },
    {
        route: NavItems.user,
        name: 'User',
        Icon: ManageAccountsIcon,
    },
    {
        route: NavItems.userlist,
        name: 'User List',
        Icon: PeopleIcon,
    },
    {
        route: NavItems.settings,
        name: 'Settings',
        Icon: Settings,
    }
]



export default MenuList;