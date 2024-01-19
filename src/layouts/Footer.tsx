import { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const Footer = ({ children }: PropsWithChildren<unknown>) => {

    const theme = useTheme();

    if (!children) {
        return null;
    }

    return (
        <Box sx={{
            bgcolor: "primary.dark",
            color: 'secondary.contrastText',
            padding: theme.spacing(2),
            textAlign: "center"
        }} >
            {children}
        </Box>
    );
};

export default Footer;