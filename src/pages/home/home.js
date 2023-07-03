import Button from '@mui/material/Button';
import React, { useState } from "react";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import "./home.css"
import Cookies from 'universal-cookie';

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

    const cookie = new Cookies();
    const email = cookie.get('email');
    var href;
    if (email) {
        href = "/profile";
    } else {
        href = "/login";
    }

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
                                    <p>Un modo tutto nuovo per <br className='mobile' /> creare il tuo curriculum.< br className='web' />< br className='web' />< br className='web' /></p>
                                </div>
                                <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
                                    <h2>Come funziona</h2>
                                    <p>Ti guideremo passo passo<br className='mobile' /> nella creazione del tuo curriculum.< br />< br /> Domande semplici e mirate:<br className='mobile' /> pochi step e il gioco è fatto.< br className='web' />< br className='web' />
                                    </p>
                                </div>

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
                    <div className='right'>
                        <div className='buttons-container'>
                            <div>
                                <h2>Crea ora < br /> il tuo curriculum</h2>
                                <Button variant="outlined"
                                    href={href}
                                    sx={{
                                        px: 3,
                                        fontWeight: 'bold',
                                        borderRadius: '30px',
                                        fontFamily: 'Open Sans',
                                        fontSize: "15px",
                                        textTransform: 'none',
                                        border: "2px solid #087A87",
                                        backgroundColor: '#ffffff',
                                        color: '#000000',
                                        '&:hover': {
                                            color: '#ffffff',
                                            backgroundColor: '#087A87',
                                            border: "2px solid #087A87",
                                        },
                                    }}
                                >Inizia</Button>
                                < br className='web' />< br className='web' />< br className='web' />< br className='web' />< br className='web' />< br className='web' />
                                <h3>Stai cercando personale?</h3>
                                <Button variant="outlined"
                                    href="/search"
                                    sx={{
                                        px: 3,
                                        fontWeight: 'bold',
                                        borderRadius: '30px',
                                        fontFamily: 'Open Sans',
                                        fontSize: "15px",
                                        textTransform: 'none',
                                        border: "2px solid #087A87",
                                        backgroundColor: '#ffffff',
                                        color: '#000000',
                                        '&:hover': {
                                            color: '#ffffff',
                                            backgroundColor: '#087A87',
                                            border: "2px solid #087A87",
                                        },
                                    }}
                                >Sfoglia i curriculum</Button>
                            </div>
                        </div >
                    </div>
                </div >
            </ThemeProvider >
        </>
    )
};