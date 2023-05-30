import Button from '@mui/material/Button';
import React, { useState } from "react";
import Stack from '@mui/material/Stack';
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
                                    <h2>Chi siamo</h2>
                                    <p>Qui potrai creare il tuo curriculum in modo semplice,<br></br>veloce e professionale. <br></br><br></br>Crea un account gratuito e costruisci un curriculum su <br></br>misura per te, rendendo facile la ricerca del lavoro dei <br></br>tuoi sogni.</p>
                                </div>
                                <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
                                    <h2>Come funziona</h2>
                                    <p>Sarai guidato attraverso una serie di domande mirate <br></br>a trovare le infromazioni chiave per il tuo curriculum.<br></br><br></br>Potrai scegliere il modello di CV che più ti si addice e <br></br>personalizzarlo con le infromazioni che meglio si <br></br>adattano alle tue esigenze.
                                    </p>
                                </div>
                                <div className={`slide ${currentSlide === 3 ? "active" : ""}`}>
                                    <h2>Condividi</h2>
                                    <p>Puoi condividere facilmente il tuo curriculum<br></br>attraverso i canali social, inviarlo direttamebte agli<br></br>annunci di lavoro e persino inoltrarlo a potenziali<br></br>datori di lavoro.<br></br><br></br><br></br></p>
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
                                    <span
                                        className={`dot ${currentSlide === 3 ? "active" : ""}`}
                                        onClick={() => changeSlide(3)}
                                    ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='buttons-container'>
                            <Stack spacing={2} direction="row">
                                <Button variant="contained" type='a' href='https://airtable.com/shrxaIStJEl7Tgl2A'>Aggiungi il tuo curriculum</Button>
                                <Button variant="outlined">Sfoglia i curriculum</Button>
                            </Stack>
                        </div >
                    </div>
                </div >
            </ThemeProvider>
        </>
    )
};