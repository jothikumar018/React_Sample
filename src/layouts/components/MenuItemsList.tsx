import { useLocation } from 'react-router-dom';
import MenuItem from "./MenuItem";
import { IMenuItem } from "../../types";
import { List } from "@mui/material";
import { useTheme } from "@mui/material";

const MenuItemsList = ({ items = [] }: { items?: IMenuItem[] }) => {

    const theme = useTheme();

    const { pathname } = useLocation();

    if (!items.length) return null;

    return (
        <List sx={{ p: 0 }}>
            {items.map(({ name, route, Icon }) => (
                <MenuItem
                    Icon={Icon}
                    name={name}
                    route={route}
                    key={route}
                    selected={pathname === route}
                    theme = {theme}
                />
            ))}
        </List>
    );

};

export default MenuItemsList;