import { useEffect } from 'react';
import { Link } from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Theme } from '@mui/material/styles';
import { IMenuItem } from "../../types";

type Props = IMenuItem & {
    selected?: boolean;
    onClick?: () => void;
    theme: Theme;
};

const MenuItem: React.FC<Props> = ({
    route,
    name,
    Icon,
    selected,
    onClick,
    theme,
}) => {

    const link = (
        <ListItem key={name} disablePadding>
            <ListItemButton
                sx={{
                    '&.Mui-selected': {
                        backgroundColor: 'primary.dark',
                        color: 'common.white',
                    },
                    '&:hover': {
                        backgroundColor: 'primary.light',
                        color: 'common.white',
                    },
                    textDecoration: "none"
                }}
                selected={selected}
                onClick={onClick}>
                <ListItemIcon
                    sx={[
                        { minWidth: 'auto' },
                        (theme) => ({
                            paddingRight: theme.spacing(2),
                        }),
                    ]}
                >
                    <Icon sx={{ color: 'secondary.dark' }} />
                </ListItemIcon>
                <ListItemText primary={name} />
            </ListItemButton>

        </ListItem>
    );

    useEffect(() => {
        if (selected) {
            document.title = name;
        }
    }, [selected]);

    return (
        route
            ? <Link to={route}>{link}</Link>
            : link
    );
};

export default MenuItem;