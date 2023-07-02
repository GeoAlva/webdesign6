import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Curricraft from "./Curricraft.svg"
import Button from "@mui/material/Button"
import "./curriculumHeader.css"
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const theme = createTheme({
    palette: {
        primary: {
            main: '#008080',
            contrastText: '#fff',
        },
    },
});

function CurriculumHeader() {
    const handleDownloadPDF = () => {
        const upLayerDiv = document.querySelector(".upLayer");

        html2canvas(upLayerDiv).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 0, 0);
            pdf.save("curriculum.pdf");
        });
    };

    const location = useLocation();


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
                                px: 3,
                                borderRadius: '30px',
                                fontFamily: 'Open Sans',
                                fontWeight: 'bold',
                                fontSize: "15px",
                                textTransform: 'none',
                                border: "3px solid #008080",
                                backgroundColor: 'rgb(236, 245, 246)',
                                color: '#008080',
                                '&:hover': {
                                    color: '#008080',
                                    border: "3px solid #008080",
                                },
                            }}
                        >Condividi via e-mail</Button>

                        <Button variant="outlined" onClick={handleDownloadPDF}
                            sx={{
                                width: "max-content",
                                px: 3,
                                borderRadius: '30px',
                                fontFamily: 'Open Sans',
                                fontWeight: 'bold',
                                fontSize: "15px",
                                textTransform: 'none',
                                border: "3px solid #008080",
                                backgroundColor: 'rgb(236, 245, 246)',
                                color: '#008080',
                                '&:hover': {
                                    color: '#008080',
                                    border: "3px solid #008080",
                                },
                            }}
                        >Scarica PDF</Button>

                        {useState(location.state.fromProfile==="true" ? (<Button variant="outlined"
                            href="/profile"
                            sx={{
                                width: "max-content",
                                px: 3,
                                borderRadius: '30px',
                                fontFamily: 'Open Sans',
                                fontWeight: 'bold',
                                fontSize: "15px",
                                textTransform: 'none',
                                border: "3px solid #008080",
                                backgroundColor: 'rgb(236, 245, 246)',
                                color: '#008080',
                                '&:hover': {
                                    color: '#008080',
                                    border: "3px solid #008080",
                                },
                            }}
                        >Chiudi</Button>) : (<Button variant="outlined"
                            href="/search"
                            sx={{
                                width: "max-content",
                                px: 3,
                                borderRadius: '30px',
                                fontFamily: 'Open Sans',
                                fontWeight: 'bold',
                                fontSize: "15px",
                                textTransform: 'none',
                                border: "3px solid #008080",
                                backgroundColor: 'rgb(236, 245, 246)',
                                color: '#008080',
                                '&:hover': {
                                    color: '#008080',
                                    border: "3px solid #008080",
                                },
                            }}
                        >Chiudi</Button>))}
                    </div>
                </Toolbar>
            </AppBar >
        </ThemeProvider>
    );
}
export default CurriculumHeader;
