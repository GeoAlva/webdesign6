import "./search.css"
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import { Filter, Margin } from "@mui/icons-material";
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import filtriBtnOpen from "./filtriBtnOpen.svg";
import filtriBtnClose from "./filtriBtnClose.svg";
import folderImg from "./folderImg.svg";
import Button from '@mui/material/Button';
import Airtable from 'airtable';
import React, { useState, useEffect } from "react";


const theme = createTheme({
    palette: {
        primary: {
            main: '#008080',
            contrastText: '#fff',
        },
    },
});

export default function Search() {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredCurriculum, setFilteredCurriculum] = useState([]);
    const [message, setMessage] = useState("");
    const [curriculumData, setCurriculumData] = useState([]);
    const [radioButtons, setRadioButtons] = useState([
        { id: 'qualsiasiMomento', checked: false },
        { id: 'ultime24Ore', checked: false },
        { id: 'ultimaSettimana', checked: false },
        { id: 'UltimoMese', checked: false },
        { id: 'fullTime', checked: false },
        { id: 'stage', checked: false },
        { id: 'partTime', checked: false },
        { id: 'inSede', checked: false },
        { id: 'sedeERemoto', checked: false },
        { id: 'daRemoto', checked: false },
        { id: 'sedeORemoto', checked: false },
        { id: 'triennale', checked: false },
        { id: 'magistrale', checked: false },
        { id: 'cicloUnico', checked: false },
        { id: 'vecchioOrdinamento', checked: false },
        { id: 'liceo', checked: false },
        { id: 'professionale', checked: false },
        { id: 'tecnico', checked: false },
        { id: 'altro(diploma)', checked: false },
        { id: 'architetturaEDesign', checked: false },
        { id: 'giurisprudenza', checked: false },
        { id: 'medicinaEChirurgia', checked: false },
        { id: 'scienzeMatematiche', checked: false },
        { id: 'altro(corsoLaurea)', checked: false },
        { id: 'economia', checked: false },
        { id: 'lingueECultureModerne', checked: false },
        { id: 'scienzeDellaFormazione', checked: false },
        { id: 'scienzePolitiche', checked: false },
        { id: 'architetto', checked: false },
        { id: 'chimico', checked: false },
        { id: 'designer', checked: false },
        { id: 'informatico', checked: false },
        { id: 'insegnante', checked: false },
        { id: 'psicologo', checked: false },
        { id: 'avvocato', checked: false },
        { id: 'commercialista', checked: false },
        { id: 'farmacista', checked: false },
        { id: 'ingegnere', checked: false },
        { id: 'medicoChirurgo', checked: false },
        { id: 'altro(Professione)', checked: false }
    ]);
    const handleButtonClick = (id) => {
        const updatedRadioButtons = radioButtons.map((button) => {
            if (button.id === id) {
                return { ...button, checked: !button.checked };
            } else {
                return button;
            }
        });
        setRadioButtons(updatedRadioButtons);
        const selectedFilterIds = updatedRadioButtons
            .filter((button) => button.checked)
            .map((button) => button.id);
        setSelectedFilters(selectedFilterIds);
    };

    const filterCurriculum = () => {
        const base = new Airtable({ apiKey: 'keyIXV1obmywgbWZE' }).base('app7EHcO1NO4VD6sc');

        const filterOptions = {
            // Non viene applicato alcun filtro
        };

        base('Curriculum').select(filterOptions).firstPage((err, records) => {
            if (err) {
                console.error('Errore durante il recupero dei curriculum filtrati:', err);
                return;
            }
            const filteredData = records.map((record) => {
                return {
                    id: record.id,
                    nome: record.fields.Name,
                    cognome: record.fields.Cognome,
                    professione: record.fields.professione,
                    siglaProvinciale: record.fields.provinciaResidenza,
                };
            });

            setCurriculumData(filteredData);

            if (filteredData.length === 0) {
                setMessage("NOT FOUND");
            } else {
                setMessage("");
            }
            console.log(filteredData);
        });
    };

    useEffect(() => {
        filterCurriculum();
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <div class="search">
                <div class="left-search">

                </div>
                <div className="left-search">
                    {curriculumData.length > 0 ? (
                        curriculumData.map((curriculum) => (
                            <div className="curriculum-view" key={curriculum.id}>
                                <div className="indietro-1">
                                    <p className="indietro">Indietro</p>
                                </div>
                                <div className="avanti-1">
                                    <p className="avanti">Avanti</p>
                                </div>
                                <img src={folderImg} className="folder-img" />
                                <div className="field">
                                    <p className="nome-cognome-professione">
                                        {`${curriculum.nome} ${curriculum.cognome} - ${curriculum.professione} (${curriculum.siglaProvinciale})`}
                                    </p>
                                </div>
                                {/* Mostra i dettagli del curriculum */}
                            </div>
                        ))
                    ) : (
                        <div className="not-found">
                            <p>{message}</p>
                        </div>
                    )}
                </div>
                <div class="right-filters" id="right-filters">
                    <div class="filters-btn" id="filters-btn">
                        <h6 className="filtri-scritta">Filtri</h6>
                        <Button onClick={showFilters}><img src={filtriBtnOpen} alt="Filtri" class="filters-icon" id="open" /><img src={filtriBtnClose} alt="Filtri" class="filters-icon" id="close" /></Button>

                    </div>
                    <div class="filters" id="filters">

                        <h5>Data di pubblicazione</h5>
                        <div class="radioButtons">
                            <FormControl>
                                <Grid container spacing={50}>
                                    <Grid item xs={6} sm={3}>
                                        <FormControlLabel value="qualsiasiMomento" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'qualsiasiMomento')?.checked} onClick={() => handleButtonClick('qualsiasiMomento')} />} label={<span style={{ whiteSpace: 'nowrap' }}>In qualsiasi momento</span>} labelPlacement="end" />
                                        <FormControlLabel value="ultime24Ore" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'ultime24Ore')?.checked} onClick={() => handleButtonClick('ultime24Ore')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Ultime 24 ore</span>} labelPlacement="end" />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <FormControlLabel value="ultimaSettimana" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'ultimaSettimana')?.checked} onClick={() => handleButtonClick('ultimaSettimana')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Ultima settimana</span>} labelPlacement="end" />
                                        <FormControlLabel value="ultimoMese" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'ultimoMese')?.checked} onClick={() => handleButtonClick('ultimoMese')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Ultimo mese</span>} labelPlacement="end" />
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </div>

                        <h5>Località</h5>

                        <h5>Tipo di lavoro</h5>
                        <div class="radioButtons">
                            <FormControl>
                                <Grid container spacing={50}>
                                    <Grid item xs={6} sm={3}>
                                        <FormControlLabel value="fullTime" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'fullTime')?.checked} onClick={() => handleButtonClick('fullTime')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Full-time</span>} labelPlacement="end" />
                                        <FormControlLabel value="stage" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'stage')?.checked} onClick={() => handleButtonClick('stage')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Stage</span>} labelPlacement="end" />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <FormControlLabel value="partTime" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'partTime')?.checked} onClick={() => handleButtonClick('partTime')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Part-time</span>} labelPlacement="end" />
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </div>

                        <h5>In sede/da remoto</h5>
                        <div class="radioButtons">
                            <FormControl>
                                <Grid container spacing={50}>
                                    <Grid item xs={6} sm={3}>
                                        <FormControlLabel value="inSede" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'inSede')?.checked} onClick={() => handleButtonClick('inSede')} />} label={<span style={{ whiteSpace: 'nowrap' }}>In sede</span>} labelPlacement="end" />
                                        <FormControlLabel value="sedeERemoto" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'sedeERemoto')?.checked} onClick={() => handleButtonClick('sedeERemoto')} />} label={<span style={{ whiteSpace: 'nowrap' }}>In sede e da remoto</span>} labelPlacement="end" />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <FormControlLabel value="daRemoto" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'daRemoto')?.checked} onClick={() => handleButtonClick('daRemoto')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Da remoto</span>} labelPlacement="end" />
                                        <FormControlLabel value="sedeORemoto" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'sedeORemoto')?.checked} onClick={() => handleButtonClick('sedeORemoto')} />} label={<span style={{ whiteSpace: 'nowrap' }}>In sede e/o da remoto</span>} labelPlacement="end" />
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </div>

                        <h5>Tipo di diploma</h5>
                        <div class="radioButtons">
                            <FormControl>
                                <Grid container spacing={50}>
                                    <Grid item xs={6} sm={3}>
                                        <FormControlLabel value="triennale" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'triennale')?.checked} onClick={() => handleButtonClick('triennale')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Laurea triennale</span>} labelPlacement="end" />
                                        <FormControlLabel value="magistrale" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'magistrale')?.checked} onClick={() => handleButtonClick('magistrale')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Laurea magistrale</span>} labelPlacement="end" />
                                        <FormControlLabel value="cicloUnico" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'cicloUnico')?.checked} onClick={() => handleButtonClick('cicloUnico')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Laurea a ciclo unico</span>} labelPlacement="end" />
                                        <FormControlLabel value="vecchioOrdinamento" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'vecchioOrdinamento')?.checked} onClick={() => handleButtonClick('vecchioOrdinamento')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Laurea vecchio ordinamento</span>} labelPlacement="end" />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <FormControlLabel value="liceo" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'liceo')?.checked} onClick={() => handleButtonClick('liceo')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Liceo</span>} labelPlacement="end" />
                                        <FormControlLabel value="professionale" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'professionale')?.checked} onClick={() => handleButtonClick('professionale')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Istituto professionale</span>} labelPlacement="end" />
                                        <FormControlLabel value="tecnico" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'tecnico')?.checked} onClick={() => handleButtonClick('tecnico')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Istituto tecnico</span>} labelPlacement="end" />
                                        <FormControlLabel value="altro(diploma)" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'altro(diploma)')?.checked} onClick={() => handleButtonClick('altro(diploma)')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Altro</span>} labelPlacement="end" />
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </div>

                        <h5>Corso di laurea</h5>
                        <div class="radioButtons">
                            <FormControl>
                                <Grid container spacing={50}>
                                    <Grid item xs={6} sm={3}>
                                        <FormControlLabel value="architetturaEDesign" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'architetturaEDesign')?.checked} onClick={() => handleButtonClick('architetturaEDesign')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Architettura e design</span>} labelPlacement="end" />
                                        <FormControlLabel value="giurisprudenza" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'giurisprudenza')?.checked} onClick={() => handleButtonClick('giurisprudenza')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Giurisprudenza</span>} labelPlacement="end" />
                                        <FormControlLabel value="medicinaEChirurgia" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'medicinaEChirurgia')?.checked} onClick={() => handleButtonClick('medicinaEChirurgia')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Medicina e chirurgia</span>} labelPlacement="end" />
                                        <FormControlLabel value="scienzeMatematiche" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'scienzeMatematiche')?.checked} onClick={() => handleButtonClick('scienzeMatematiche')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Scienze matematiche e fisiche</span>} labelPlacement="end" />
                                        <FormControlLabel value="altro(corsoLaurea)" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'altro(corsoLaurea)')?.checked} onClick={() => handleButtonClick('altro(corsoLaurea)')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Altro</span>} labelPlacement="end" />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <FormControlLabel value="economia" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'economia')?.checked} onClick={() => handleButtonClick('economia')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Economia</span>} labelPlacement="end" />
                                        <FormControlLabel value="lingueECultureModerne" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'lingueECultureModerne')?.checked} onClick={() => handleButtonClick('lingueECultureModerne')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Lingue e culture moderne</span>} labelPlacement="end" />
                                        <FormControlLabel value="scienzeDellaFormazione" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'scienzeDellaFormazione')?.checked} onClick={() => handleButtonClick('scienzeDellaFormazione')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Scienze della formazione</span>} labelPlacement="end" />
                                        <FormControlLabel value="scienzePolitiche" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'scienzePolitiche')?.checked} onClick={() => handleButtonClick('scienzePolitiche')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Scienze politiche</span>} labelPlacement="end" />
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </div>

                        <h5>Professione</h5>
                        <div class="radioButtons">
                            <FormControl>
                                <Grid container spacing={50}>
                                    <Grid item xs={6} sm={3}>
                                        <FormControlLabel value="architetto" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'architetto')?.checked} onClick={() => handleButtonClick('architetto')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Architetto</span>} labelPlacement="end" />
                                        <FormControlLabel value="chimico" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'chimico')?.checked} onClick={() => handleButtonClick('chimico')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Chimico</span>} labelPlacement="end" />
                                        <FormControlLabel value="designer" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'designer')?.checked} onClick={() => handleButtonClick('designer')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Designer</span>} labelPlacement="end" />
                                        <FormControlLabel value="informatico" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'informatico')?.checked} onClick={() => handleButtonClick('informatico')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Informatico</span>} labelPlacement="end" />
                                        <FormControlLabel value="insegnante" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'insegnante')?.checked} onClick={() => handleButtonClick('insegnante')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Insegnante</span>} labelPlacement="end" />
                                        <FormControlLabel value="psicologo" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'psicologo')?.checked} onClick={() => handleButtonClick('psicologo')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Psicologo</span>} labelPlacement="end" />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <FormControlLabel value="avvocato" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'avvocato')?.checked} onClick={() => handleButtonClick('avvocato')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Avvocato</span>} labelPlacement="end" />
                                        <FormControlLabel value="commercialista" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'commercialista')?.checked} onClick={() => handleButtonClick('commercialista')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Commercialista</span>} labelPlacement="end" />
                                        <FormControlLabel value="farmacista" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'farmacista')?.checked} onClick={() => handleButtonClick('farmacista')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Farmacista</span>} labelPlacement="end" />
                                        <FormControlLabel value="ingegnere" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'ingegnere')?.checked} onClick={() => handleButtonClick('ingegnere')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Ingegnere</span>} labelPlacement="end" />
                                        <FormControlLabel value="medicoChirurgo" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'medicoChirurgo')?.checked} onClick={() => handleButtonClick('medicoChirurgo')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Medico chirurgo</span>} labelPlacement="end" />
                                        <FormControlLabel value="altro(Professione)" control={<Radio color="primary" checked={radioButtons.find((button) => button.id === 'altro(Professione)')?.checked} onClick={() => handleButtonClick('altro(Professione)')} />} label={<span style={{ whiteSpace: 'nowrap' }}>Altro (specificare)</span>} labelPlacement="end" />
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </div>

                        < br className='web' />
                        < br className='web' />
                        < br className='web' />

                    </div>
                </div>
            </div >

        </ThemeProvider>
    )
}

function showFilters() {
    var show = document.getElementById("filters");
    var filtersBtn = document.getElementById("filters-btn");
    var rightFilters = document.getElementById("right-filters")

    var iconClose = document.getElementById("close");
    var iconOpen = document.getElementById("open");



    if (show.style.display === "" || show.style.display === "none") {
        show.style.display = "block";
        rightFilters.style.width = "60%";
        filtersBtn.style.marginLeft = "0";
        iconClose.style.display = "none";
        iconOpen.style.display = "block";
    } else {
        show.style.display = "none";
        rightFilters.style.width = "5%";
        filtersBtn.style.marginLeft = "-150px";
        iconClose.style.display = "block";
        iconOpen.style.display = "none";
    }
}