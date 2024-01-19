import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { PaletteMode } from '@mui/material';
import { useLocalStorage } from "../../hooks/common/useLocalStorage";

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode
    },
});


export const ColorModeContext = createContext({
    toggleColorMode: () => { },
});


export const useMode = () => {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
                localStorage.setItem("theme", JSON.stringify(mode));
            },
        }),
        [],
    );

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    // const systemTheme = useMemo(() => {
    //     setMode(prefersDarkMode ? 'dark' : 'light');
    // }, [prefersDarkMode])

    return [theme, colorMode] as const;
};