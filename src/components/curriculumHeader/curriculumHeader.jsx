import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Curricraft from "./Curricraft.svg"
import Button from "@mui/material/Button"
import "./curriculumHeader.css"
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

function CurriculumHeader() {

    return (
        <ThemeProvider theme={theme}>
            <AppBar color="transparent" elevation={0}  >
                <Toolbar className='header'>
                    <a href="/" class="logo"><img src={Curricraft} alt="Curricraft logo" style={{ width: "98px", height: "87px" }} /></a>
                    <div style={{ width: "100%" }}></div>
                    <div className="curriculumButtons">
                        <Button variant="outlined"
                            sx={{
                                width: "max-content",
                                mb: "30px",
                                px: 3,
                                borderRadius: '30px',
                                fontFamily: 'Open Sans',
                                fontWeight: 'bold',
                                fontSize: "15px",
                                textTransform: 'none',
                                border: "3px solid #008080",
                                backgroundColor: 'transparent',
                                color: '#008080',
                                '&:hover': {
                                    color: '#008080',
                                    border: "3px solid #008080",
                                },
                            }}
                        >Condividi via e-mail</Button>

                        <Button variant="outlined"
                            sx={{
                                width: "max-content",
                                mb: "30px",
                                px: 3,
                                borderRadius: '30px',
                                fontFamily: 'Open Sans',
                                fontWeight: 'bold',
                                fontSize: "15px",
                                textTransform: 'none',
                                border: "3px solid #008080",
                                backgroundColor: 'transparent',
                                color: '#008080',
                                '&:hover': {
                                    color: '#008080',
                                    border: "3px solid #008080",
                                },
                            }}
                        >Scarica PDF</Button>

                        <Button variant="outlined"
                            href="/profile"
                            sx={{
                                width: "max-content",
                                mb: "30px",
                                px: 3,
                                borderRadius: '30px',
                                fontFamily: 'Open Sans',
                                fontWeight: 'bold',
                                fontSize: "15px",
                                textTransform: 'none',
                                border: "3px solid #008080",
                                backgroundColor: 'transparent',
                                color: '#008080',
                                '&:hover': {
                                    color: '#008080',
                                    border: "3px solid #008080",
                                },
                            }}
                        >Chiudi</Button>
                    </div>
                </Toolbar>
            </AppBar >
        </ThemeProvider>
    );
}
export default CurriculumHeader;
