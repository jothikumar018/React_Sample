import { ReactNode } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { DrawerContextProvider } from "../context/drawer-context";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Sidebar from "./components/Sidebar";
import { Container } from "@mui/material";
import { AuthProvider } from "../context/AuthProvider";

interface ILayoutProps {
  children: NonNullable<ReactNode>;
}

const Layouts = ({ children }: ILayoutProps) => {

  return (
    <DrawerContextProvider>
      <AuthProvider>
        <Container maxWidth={false} disableGutters>
          <Box sx={{
            display: "flex",
            overflow: "hidden",
            flexDirection: "column",
            minHeight: "100%",
            height: "inherit"
          }}>
            <Header />
            <Toolbar />
            <Box sx={{ display: "flex", overflow: "hidden", flex: 1, height: "inherit" }}>
              <Sidebar />
              <Main>
                {children}
              </Main>
            </Box>
            <Footer>Footer</Footer>
          </Box>
        </Container>
      </AuthProvider>
    </DrawerContextProvider>
  );
};

export default Layouts;