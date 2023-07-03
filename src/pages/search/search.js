import "./search.css"
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import filtriBtnOpen from "./filtriBtnOpen.svg";
import filtriBtnClose from "./filtriBtnClose.svg";
import folderImg from "./folderImg.svg";
import Button from '@mui/material/Button';
import Airtable from 'airtable';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';



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
    const [showPagination, setShowPagination] = useState(true);
    const [citta, setCitta] = useState("");
    const [provincia, setProvincia] = useState("");

    var show = document.getElementById("filters");
    let curriculaPerPage = 12;
    if (show === null || show.style.display === "" || show.style.display === "none") {
        curriculaPerPage = 12;
    }
    else {
        curriculaPerPage = 6;
    }


    const [message, setMessage] = useState("");
    const [curriculumData, setCurriculumData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);






    const [radioButtons, setRadioButtons] = useState([
        { id: 'qualsiasiMomento', checked: false }, //ok
        { id: 'ultime24Ore', checked: false }, //ok
        { id: 'ultimaSettimana', checked: false }, //ok
        { id: 'ultimoMese', checked: false },
        { id: 'fullTime', checked: false }, //ok
        { id: 'stage', checked: false }, //ok
        { id: 'partTime', checked: false }, //ok
        { id: 'inSede', checked: false }, //ok
        { id: 'sedeERemoto', checked: false }, //ok
        { id: 'daRemoto', checked: false }, //ok
        { id: 'triennale', checked: false }, //ok
        { id: 'magistrale', checked: false }, //ok
        { id: 'cicloUnico', checked: false }, //ok
        { id: 'vecchioOrdinamento', checked: false }, //ok
        { id: 'liceo', checked: false }, //ok
        { id: 'professionale', checked: false }, //ok
        { id: 'tecnico', checked: false }, //ok
        { id: 'architetturaEDesign', checked: false }, //ok
        { id: 'giurisprudenza', checked: false },//ok
        { id: 'medicinaEChirurgia', checked: false },//ok
        { id: 'scienzeMatematiche', checked: false },//ok
        { id: 'altro(corsoLaurea)', checked: false },//ok
        { id: 'economia', checked: false },//ok
        { id: 'lingueECultureModerne', checked: false },//ok 
        { id: 'scienzeDellaFormazione', checked: false },//ok
        { id: 'scienzePolitiche', checked: false },//ok
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
        const currentDate = new Date();

        const base = new Airtable({ apiKey: 'keyIXV1obmywgbWZE' }).base('app7EHcO1NO4VD6sc');

        const filterConditions = [];

        if (selectedFilters.includes('ultime24Ore')) {
            const last24Hours = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
            filterConditions.push(
                `DATETIME_DIFF({dataPubblicazione}, '${last24Hours.toISOString()}', 'hours') >= 0`
            );
        }

        if (selectedFilters.includes('ultimaSettimana')) {
            const lastWeek = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
            filterConditions.push(
                `DATETIME_DIFF({dataPubblicazione}, '${lastWeek.toISOString()}', 'days') >= 0`
            );
        }

        if (selectedFilters.includes('ultimoMese')) {
            const lastMonth = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
            filterConditions.push(
                `DATETIME_DIFF({dataPubblicazione}, '${lastMonth.toISOString()}', 'days') >= 0`
            );
        }

        if (selectedFilters.includes('partTime')) {
            filterConditions.push('"Part time" = {tipoLavoro}');
        }

        if (selectedFilters.includes('fullTime')) {
            filterConditions.push('"Full time" = {tipoLavoro}');
        }

        if (selectedFilters.includes('stage')) {
            filterConditions.push('"Stage" = {tipoLavoro}');
        }

        if (selectedFilters.includes('inSede')) {
            filterConditions.push('"In sede" = {posizioneLavoro}');
        }

        if (selectedFilters.includes('sedeERemoto')) {
            filterConditions.push('"In sede e da remoto" = {posizioneLavoro}');
        }

        if (selectedFilters.includes('daRemoto')) {
            filterConditions.push('"Da remoto" = {posizioneLavoro}');
        }

        if (selectedFilters.includes('triennale')) {
            filterConditions.push('"Laurea triennale" = {tipoLaurea}');
        }

        if (selectedFilters.includes('magistrale')) {
            filterConditions.push('"Laurea magistrale" = {tipoLaurea}');
        }

        if (selectedFilters.includes('cicloUnico')) {
            filterConditions.push('"Laurea a ciclo unico" = {tipoLaurea}');
        }

        if (selectedFilters.includes('vecchioOrdinamento')) {
            filterConditions.push('"Laurea vecchio ordinamento" = {tipoLaurea}');
        }

        if (selectedFilters.includes('liceo')) {
            filterConditions.push('"Liceo" = {categoriaDiploma}');
        }

        if (selectedFilters.includes('tecnico')) {
            filterConditions.push('"Istituto tecnico" = {categoriaDiploma}');
        }

        if (selectedFilters.includes('professionale')) {
            filterConditions.push('"Istituto professionale" = {categoriaDiploma}');
        }

        if (selectedFilters.includes('architetturaEDesign')) {
            filterConditions.push('"Architettura / Design" = {ambitoLaurea}');
        }

        if (selectedFilters.includes('giurisprudenza')) {
            filterConditions.push('"Giurisprudenza" = {ambitoLaurea}');
        }

        if (selectedFilters.includes('medicinaEChirurgia')) {
            filterConditions.push('"Medicina e chirurgia" = {ambitoLaurea}');
        }

        if (selectedFilters.includes('scienzeMatematiche')) {
            filterConditions.push('"Scienze matematiche e fisiche" = {ambitoLaurea}');
        }

        if (selectedFilters.includes('altro(corsoLaurea)')) {
            filterConditions.push('"Altro" = {ambitoLaurea}');
        }

        if (selectedFilters.includes('economia')) {
            filterConditions.push('"Economia" = {ambitoLaurea}');
        }

        if (selectedFilters.includes('lingueECultureModerne')) {
            filterConditions.push('"Lingue e culture moderne" = {ambitoLaurea}');
        }

        if (selectedFilters.includes('scienzeDellaFormazione')) {
            filterConditions.push('"Scienze della formazione" = {ambitoLaurea}');
        }

        if (selectedFilters.includes('scienzePolitiche')) {
            filterConditions.push('"Scienze politiche" = {ambitoLaurea}');
        }

        if (citta !== "") {
            filterConditions.push(`LOWER({cittaResidenza}) = '${citta.toLowerCase()}'`);
        }

        if (provincia !== "") {
            filterConditions.push(`LOWER({provinciaResidenza}) = '${provincia.toLowerCase()}'`);
        }

        const filteredOptions = {
            filterByFormula: `AND(${filterConditions.join(',')})`, //in questo modo si concatenano più filtri: equivale a una sorta di &&
        };


        base('Curriculum').select(filteredOptions).firstPage((err, records) => {
            if (err) {
                console.error('Errore durante il recupero dei curriculum filtrati:', err);
                return;
            }
            const filteredData = records.map((record) => {
                return {
                    mail: record.fields.Email, //con questo poi lo colleghiamo al cv da far visualizzare
                    nome: record.fields.Name,
                    cognome: record.fields.Cognome,
                    professione: record.fields.professione,
                    siglaProvinciale: record.fields.provinciaResidenza,
                };
            });
            if (filteredData.length <= 6) {
                setShowPagination(false);
            } else {
                setShowPagination(true);
            }
            setCurriculumData(filteredData);

            if (filteredData.length === 0) {
                setMessage("Ci dispiace, la ricerca\n non ha prodotto risultati");
            } else {
                setMessage("");
            }
            console.log(filteredData);
        });
    };

    useEffect(() => {
        filterCurriculum();
    }, [selectedFilters, citta, provincia]);

    let indexOfLastCurriculum = currentPage * curriculaPerPage;
    let indexOfFirstCurriculum = indexOfLastCurriculum - curriculaPerPage;
    let currentCurricula = curriculumData.slice(indexOfFirstCurriculum, indexOfLastCurriculum);

    const handlePrevPage = () => { //se sono nella prima pagina, allora non faccio niente
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => { //se sono nell'ultima pagina, allora non faccio nada
        if (currentPage < Math.ceil(curriculumData.length / curriculaPerPage)) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const showFilters = () => {
        let show = document.getElementById("filters");
        let filtersBtn = document.getElementById("filters-btn");
        let rightFilters = document.getElementById("right-filters")
        let iconClose = document.getElementById("close");
        let iconOpen = document.getElementById("open");

        let leftSearch = document.getElementById("left-search");
        let curriculumGrid = document.getElementById("curriculum-grid");



        if (show.style.display === "" || show.style.display === "none") {
            show.style.display = "block";
            rightFilters.style.width = "55%";
            rightFilters.style.overflowY = "scroll";
            filtersBtn.style.marginLeft = "0";
            iconClose.style.display = "none";
            iconOpen.style.display = "block";
            curriculaPerPage = 12;
            leftSearch.style.width = "40%";
            curriculumGrid.style.gridTemplateColumns = "auto";
            setCurrentPage(1);
            handleButtonClick();
        } else {
            show.style.display = "none";
            rightFilters.style.width = "5%";
            rightFilters.style.overflowY = "none";
            filtersBtn.style.marginLeft = "-150px";
            iconClose.style.display = "block";
            iconOpen.style.display = "none";
            curriculaPerPage = 6;
            leftSearch.style.width = "80%";
            curriculumGrid.style.gridTemplateColumns = "auto auto";
            setCurrentPage(1);
            handleButtonClick();
        }


    };

    const handleCittaChange = (event) => {
        setCitta(event.target.value);
    };

    const handleProvinciaChange = (event) => {
        setProvincia(event.target.value);
    };


    const navigate = useNavigate();

    const redirectToCurriculum = (mail) => {
        navigate('/curriculum', { state: { mail: mail, fromProfile: 'false' } })
    }

    return (
        <ThemeProvider theme={theme}>
            <div class="search">
                <div className="left-search" id="left-search">
                    <div class="curriculum-grid" id="curriculum-grid">
                        {currentCurricula.length > 0 ? (
                            currentCurricula.map((curriculum) => (
                                <div className="curriculum-view" key={curriculum.id} onClick={() => redirectToCurriculum(curriculum.mail)} >
                                    <img src={folderImg} className="folder-img" alt="folder-icon" />
                                    <div className="field" >
                                        <p className="nome-cognome-professione" >
                                            {`${curriculum.nome} ${curriculum.cognome} - ${curriculum.professione} (${curriculum.siglaProvinciale})`}
                                        </p>
                                        <br></br>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="not-found">
                                <p>{message.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}</p>
                            </div>
                        )}


                    </div>
                    <div className="page-buttons">
                        {showPagination && (
                            <div className="indietro-1" onClick={handlePrevPage}>
                                <p className="indietro" >Indietro</p>
                            </div>
                        )}
                        {showPagination && (
                            <div className="avanti-1" onClick={handleNextPage}>
                                <p className="avanti" >Avanti</p>
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
                            <div class="radioButtons">
                                <FormControl>
                                    <Grid container spacing={8} direction="row">
                                        <Grid item xs={6} >
                                            <TextField label="Città" value={citta} onChange={handleCittaChange} variant="standard" className="loc" />
                                        </Grid>
                                        <Grid item xs={6} >
                                            <TextField label="Sigla Provinciale" value={provincia} onChange={handleProvinciaChange} variant="standard" className="loc" />
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </div>

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

                            < br className='web' />
                            < br className='web' />
                            < br className='web' />

                        </div>
                    </div>
                </div >
            </div>

        </ThemeProvider >
    )
}

