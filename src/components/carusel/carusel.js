import React, { useState } from "react";
import { Button } from '@mui/material';
import './carusel.css'

const styles = `
.Button{
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
        }
`;


function Carusel() {
    const [currentSlide, setCurrentSlide] = useState(1);

    const changeSlide = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };

    return (
        <>
            <style>{styles}</style>
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
                        <p>Puoi condividere facilmente il tuo curriculum<br></br>attraverso i canali social, inviarlo direttamebte agli<br></br>annunci di lavoro e persino inoltrarlo a potenziali<br></br>datori di lavoro</p>
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
        </>
    );
}

export default Carusel;