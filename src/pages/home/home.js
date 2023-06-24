import Button from '@mui/material/Button';
import React, { useState } from "react";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import "./home.css"

const theme = createTheme({
    palette: {
        primary: {
            main: '#008080',
            contrastText: '#fff',
        },
    },
});


export default function Home() {

    const [currentSlide, setCurrentSlide] = useState(1);

    const changeSlide = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className='home'>
                    <div className='left'>
                        <div className="carousel-container">
                            <div className="carousel">
                                <div className={`slide ${currentSlide === 1 ? "active" : ""}`}>
                                    <div class="name"> <h2 class="curri">Curri</h2><h2 class="craft">Craft</h2></div>
                                    <p>Un modo tutto nuovo per creare il tuo curriculum.<br /><br /><br /><br /><br /><br /><br /></p>
                                </div>
                                <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
                                    <h2>Come funziona</h2>
                                    <p>Ti guideremo passo passo nella creazione del tuo curriculum.<br /><br /> Domande semplici e mirate: pochi step e il gioco è fatto.<br /><br /> Scegli il template che più ti si addice e personalizzalo con le informazioni che meglio si adattano alle tue esigenze.<br /><br />
                                    </p>
                                </div>
                                <div className="dots">
                                    <span
                                        className={`dot ${currentSlide === 1 ? "active" : ""}`}
                                        onClick={() => changeSlide(1)}
                                    ></span>
                                    <span
                                        className={`dot ${currentSlide === 2 ? "active" : ""}`}
                                        onClick={() => changeSlide(2)}
                                    ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='buttons-container'>
                            <div>
                                <h1>Crea ora <br /> il tuo curriculum</h1>
                                <Button variant="contained"
                                    href="/login"
                                    sx={{
                                        width: "318px",
                                        px: 3,
                                        fontWeight: 'bold',
                                        borderRadius: '30px',
                                        fontFamily: 'Open Sans',
                                        fontSize: "15px",
                                        textTransform: 'none',
                                        backgroundColor: '#087A87',
                                        color: '#ffffff',
                                    }}
                                >Inizia</Button>
                                <br /><br /><br /><br /><br /><br />
                                <h3>Stai cercando personale?</h3>
                                <Button variant="outlined"
                                    href="https://airtable.com/shrGSUzMP6qQlRZfL"
                                    sx={{
                                        width: "318px",
                                        px: 3,
                                        fontWeight: 'bold',
                                        borderRadius: '30px',
                                        fontFamily: 'Open Sans',
                                        fontSize: "15px",
                                        textTransform: 'none',
                                        border: "3px solid #008080",
                                        backgroundColor: '#ffffff',
                                        color: '#000000',
                                        '&:hover': {
                                            color: '#008080',
                                            border: "3px solid #008080",
                                        },
                                    }}
                                >Sfoglia i curricula</Button>
                            </div>
                        </div >
                    </div>
                </div >
            </ThemeProvider >
        </>
    )
};