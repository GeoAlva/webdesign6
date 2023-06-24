import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Curricraft from "./Curricraft.svg"
import Button from "@mui/material/Button"
import Cookies from 'universal-cookie';
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

function logout(){
    
    const cookie = new Cookies();
    cookie.remove('email');
    window.location.replace('/');

}

function buttonLoader(){
    if(document.cookie.startsWith("email=")){
        return(
            <Button variant="outlined"
            onClick={logout}
            sx={{
                px: 3,
                mr: 4,
                fontWeight: 'bold',
                borderRadius: '20px',
                fontFamily: 'Open Sans',
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
            >Esci</Button>)
    }
    else return(<>
    <Button variant="text"
                        href="/login"
                        sx={{
                            px: 3,
                            mx: 2,
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            fontFamily: 'Open Sans',
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
                            fontFamily: 'Open Sans',
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
                    >Registrati</Button></>

    )
}




function AppHeader() {
        return (
        <ThemeProvider theme={theme}>
            <AppBar color="transparent" elevation={0} >
                <Toolbar >
                    <a href="/" class="logo"><img src={Curricraft} alt="Curricraft logo" style={{width:"98px", height:"87px"}} /></a>
                    <div style={{ width: "100%" }}></div>

                    {buttonLoader()}
                    
                </Toolbar>
            </AppBar >
        </ThemeProvider>
    );
}
export default AppHeader;
