import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Curricraft from "./Curricraft.svg"
import Button from "@mui/material/Button"
import Cookies from 'universal-cookie';
import { useLocation } from 'react-router-dom';
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

function ButtonLoader(){
    let location = useLocation();
    if(location.pathname === '/login' || location.pathname === '/signup' ) return;

    if(document.cookie.startsWith("email=") && location.pathname==="/profile"){
        return(<>
            <Button variant="text"
            onClick={logout}
            sx={{
                px: 3,
                            mr: 4,
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            fontFamily: 'Open Sans',
                            fontWeight:'Bold',
                            fontSize: "18px",
                            textTransform: 'none',
                            backgroundColor: '#transparent',
                            textDecoration:'underline',
                            color: '#087A87',
                            '&:hover': {
                                color: '#087A87',
                                textDecoration:'underline',
                            },
            }}
            >Esci</Button>
            
            </>)
        
    }

    else if(document.cookie.startsWith("email=")){
        return(<>
        <Button variant="text"
            href="/profile"
            sx={{
                width:'250px',

                            mr: 3,
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            fontFamily: 'Open Sans',
                            fontWeight:'Bold',
                            fontSize: "18px",
                            textTransform: 'none',
                            backgroundColor: '#transparent',
                            textDecoration:'underline',
                            color: '#087A87',
                            '&:hover': {
                                color: '#087A87',
                                textDecoration:'underline',
                            },
            }}
            >Il mio profilo</Button>
            <Button variant="text"
            onClick={logout}
            sx={{
                px: 3,
                            mr: 4,
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            fontFamily: 'Open Sans',
                            fontWeight:'Bold',
                            fontSize: "18px",
                            textTransform: 'none',
                            backgroundColor: '#transparent',
                            textDecoration:'underline',
                            color: '#087A87',
                            '&:hover': {
                                color: '#087A87',
                                textDecoration:'underline',
                            },
            }}
            >Esci</Button>
            
            </>)
    }
    else return(<>
    <Button variant="text"
                        href="/login"
                        sx={{
                            px: 3,
                            mx: 2,
                            borderRadius: '20px',
                            fontFamily: 'Open Sans',
                            fontSize: "20px",
                            textTransform: 'none',
                            backgroundColor: '#transparent',
                            color: '#087A87',

                        }}
                    >Accedi</Button>

                    <Button variant="text"
                        href="/signup"
                        sx={{
                            px: 3,
                            mr: 4,
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            fontFamily: 'Open Sans',
                            fontWeight:'Bold',
                            fontSize: "20px",
                            textTransform: 'none',
                            backgroundColor: '#transparent',
                            textDecoration:'underline',
                            color: '#087A87',
                            '&:hover': {
                                color: '#087A87',
                                textDecoration:'underline',
                            },
                        }}
                    >Registrati</Button></>

    )
}




function AppHeader() {

        return (
        <ThemeProvider theme={theme}>
            <AppBar color="transparent" elevation={0}  >
                <Toolbar className='header'>
                    <a href="/" class="logo"><img src={Curricraft} alt="Curricraft logo" style={{width:"98px", height:"87px"}} /></a>
                    <div style={{ width: "100%" }}></div>

            {ButtonLoader()}
                    
                </Toolbar>
            </AppBar >
        </ThemeProvider>
    );
}
export default AppHeader;
