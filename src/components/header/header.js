import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"
import "./header.css"
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
    palette: {
        primary: {
            main: '#008080',
            contrastText: '#fff',
        },
    },
});




function AppHeader() {

    return (
        <ThemeProvider theme={theme}>
            <AppBar color="transparent" elevation={0} >
                <Toolbar >
                    <Typography
                        variant="h6"
                        component="a"
                        href="/"
                        sx={{
                            mx: 4,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <div style={{ width: "100%" }}></div>

                    <Button variant="text"
                        href="/login"
                        sx={{
                            px: 3,
                            mx: 2,
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            fontFamily: 'sans-serif',
                            fontSize: "15px",
                            textTransform: 'none',
                            backgroundColor: '#ffffff',
                            color: '#008080',

                        }}
                    >Accedi</Button>

                    <Button variant="outlined"
                        href="/signup"
                        sx={{
                            px: 3,
                            mr: 4,
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            fontFamily: 'sans-serif',
                            fontSize: "15px",
                            textTransform: 'none',
                            border: "1px solid #008080",
                            backgroundColor: '#ffffff',
                            color: '#000000',
                            '&:hover': {
                                color: '#008080',
                                border: "1px solid #008080",
                            },
                        }}
                    >Registrati</Button>
                </Toolbar>
            </AppBar >
        </ThemeProvider>
    );
}
export default AppHeader;
