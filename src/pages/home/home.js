import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import React, { useState } from "react";

import "./home.css"


export default function Home() {

    const [currentSlide, setCurrentSlide] = useState(1);

    const changeSlide = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };

    return (
        <>
            <div className='home'>
                <div className='left'>
                    <div className="carousel-container">
                        <div className="carousel">
                            <div className={`slide ${currentSlide === 1 ? "active" : ""}`}>
                                <h2>Chi siamo</h2>
                                <p>Qui potrai creare il tuo curriculum in modo semplice,<br></br>veloce e professionale. <br></br><br></br>Crea un account gratuito e costruisci un curriculum su <br></br>misura per te, rendendo facile la ricerca del lavoro dei <br></br>tuoi sogni</p>
                            </div>
                            <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
                                <h2>Come funziona</h2>
                                <p>Sarai guidato attraverso una serie di domande mirate <br></br>a trovare le infromazioni chiave per il tuo curriculum.<br></br><br></br>Potrai scegliere il modello di CV che più ti si addice e <br></br>personalizzarlo con le infromazioni che meglio si <br></br>adattano alle tue esigenze
                                </p>
                            </div>
                            <div className={`slide ${currentSlide === 3 ? "active" : ""}`}>
                                <h2>Condividi</h2>
                                <p>Puoi condividere facilmente il tuo curriculum<br></br>attraverso i canali social, inviarlo direttamebte agli<br></br>annunci di lavoro e persino inoltrarlo a potenziali<br></br>datori di lavoro<br></br><br></br><br></br></p>
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
                    <div className='searchBar-container'>
                        <div className='carousel'>
                            <Typography
                                variant='h4'>
                                <Box sx={{ fontWeight: 'bold', m: 1 }}>Stai Cercando<br></br> un Curriculum?</Box>

                            </Typography>
                            <Paper
                                sx={{
                                    p: '2px 4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: 400,
                                    backgroundColor: '#007987',
                                    borderRadius: '40px',
                                    '&:hover': {
                                        backgroundColor: '#51DFE1',
                                        transition: 'background-color 0.3s ease',
                                    },
                                }}
                            >

                                <InputBase
                                    sx={{
                                        ml: 1,
                                        fontWeight: 'bold',
                                        flex: 1,
                                        '&:hover': {
                                            color: '#003F47',
                                            fontWeight: 'bold',
                                        },
                                    }}

                                    placeholder="Cerca nel server"
                                    inputProps={{ 'aria-label': 'Cerca nel server' }}
                                />
                                <IconButton type="button"
                                    sx={{
                                        p: '10px',
                                        color: '#ffffff',
                                    }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>

                        </div>
                    </div >
                </div>
            </div >
        </>
    )
};