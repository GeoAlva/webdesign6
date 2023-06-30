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
    const [currentPage, setCurrentPage] = useState(1);
    const curriculaPerPage = 6;
    const [radioButtons, setRadioButtons] = useState([
        { id: 'qualsiasiMomento', checked: false },
        { id: 'ultime24Ore', checked: false },
        { id: 'ultimaSettimana', checked: false },
        { id: 'UltimoMese', checked: false },
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
        const base = new Airtable({ apiKey: 'keyIXV1obmywgbWZE' }).base('app7EHcO1NO4VD6sc');

        //const filterOptions = {
        //  filterByFormula: selectedFilters.includes('partTime') ? 'FIND("Part time", {tipoLavoro})' : '',
        //  filterByFormula: selectedFilters.includes('fullTime') ? 'FIND("Full time", {tipoLavoro})' : '',
        //  filterByFormula: selectedFilters.includes('stage') ? 'FIND("Stage", {tipoLavoro})' : '',
        /* filterByFormula: selectedFilters.includes('inSede') ? 'FIND("In sede", {posizioneLavoro})' : '',
         filterByFormula: selectedFilters.includes('sedeERmoto') ? 'FIND("In sede e da remoto", {posizioneLavoro})' : '',
         filterByFormula: selectedFilters.includes('daRemoto') ? 'FIND("Da remoto", {posizioneLavoro})' : '',
         filterByFormula: selectedFilters.includes('triennale') ? 'FIND("Laurea triennale", {tipoLaurea})' : '',
         filterByFormula: selectedFilters.includes('magistrale') ? 'FIND("Laurea magistrale", {tipoLaurea})' : '',
         filterByFormula: selectedFilters.includes('cicloUnico') ? 'FIND("Laurea a ciclo unico", {tipoLaurea})' : '',
         filterByFormula: selectedFilters.includes('vecchioOrdinamento') ? 'FIND("Laurea vecchio ordinamento", {tipoLaurea})' : '',
         filterByFormula: selectedFilters.includes('liceo') ? 'FIND("liceo", {indirizzoDiploma})' : '',
         filterByFormula: selectedFilters.includes('tecnico') ? 'FIND("istituto tecnico", {indirizzoDiploma})' : '',
         filterByFormula: selectedFilters.includes('professionale') ? 'FIND("istituto professionale", {indirizzoDiploma})' : '',
         filterByFormula: selectedFilters.includes('architetturaEDesign') ? 'FIND("Architettura / Design", {tipoLavoro})' : '',
         filterByFormula: selectedFilters.includes('giurisprudenza') ? 'FIND("Giurisprudenza", {tipoLavoro})' : '',
         filterByFormula: selectedFilters.includes('medicinaEChirurgia') ? 'FIND("Medicina e chirurgia", {tipoLavoro})' : '',
         filterByFormula: selectedFilters.includes('scienzeMatematiche') ? 'FIND("Scienze matematiche e fisiche", {posizioneLavoro})' : '',
         filterByFormula: selectedFilters.includes('altro(corsoLaurea)') ? 'FIND("Altro", {posizioneLavoro})' : '',
         filterByFormula: selectedFilters.includes('economia') ? 'FIND("Economia", {posizioneLavoro})' : '',
         filterByFormula: selectedFilters.includes('lingueEcultureModerne') ? 'FIND("Lingue e culture moderne", {tipoLaurea})' : '',
         filterByFormula: selectedFilters.includes('scienzeDellaFormazione') ? 'FIND("Scienze della formazione", {tipoLaurea})' : '',
         filterByFormula: selectedFilters.includes('scienzePolitiche') ? 'FIND("Scienze politiche", {tipoLaurea})' : '',*/
        // };

        const filterConditions = [];

        if (selectedFilters.includes('partTime')) {
            filterConditions.push('FIND("Part time", {tipoLavoro})');
        }

        if (selectedFilters.includes('fullTime')) {
            filterConditions.push('FIND("Full time", {tipoLavoro})');
        }

        if (selectedFilters.includes('stage')) {
            filterConditions.push('FIND("Stage", {tipoLavoro})');
        }

        if (selectedFilters.includes('inSede')) {
            filterConditions.push('FIND("In sede", {posizioneLavoro})');
        }

        if (selectedFilters.includes('sedeERmoto')) {
            filterConditions.push('FIND("In sede e da remoto", {posizioneLavoro})');
        }

        if (selectedFilters.includes('daRemoto')) {
            filterConditions.push('FIND("Da remoto", {posizioneLavoro})');
        }

        if (selectedFilters.includes('triennale')) {
            filterConditions.push('FIND("Laurea triennale", {tipoLaurea})');
        }

        if (selectedFilters.includes('magistrale')) {
            filterConditions.push('FIND("Laurea magistrale", {tipoLaurea})');
        }

        if (selectedFilters.includes('cicloUnico')) {
            filterConditions.push('FIND("Laurea a ciclo unico", {tipoLaurea})');
        }

        if (selectedFilters.includes('vecchioOrdinamento')) {
            filterConditions.push('FIND("Laurea vecchio ordinamento", {tipoLaurea})');
        }

        if (selectedFilters.includes('liceo')) {
            filterConditions.push('FIND("liceo", {indirizzoDiploma})');
        }

        if (selectedFilters.includes('tecnico')) {
            filterConditions.push('FIND("istituto tecnico", {indirizzoDiploma})');
        }

        if (selectedFilters.includes('professionale')) {
            filterConditions.push('FIND("istituto professionale", {indirizzoDiploma})');
        }

        if (selectedFilters.includes('architetturaEDesign')) {
            filterConditions.push('FIND("Architettura / Design", {tipoLavoro})');
        }

        if (selectedFilters.includes('giurisprudenza')) {
            filterConditions.push('FIND("Giurisprudenza", {tipoLavoro})');
        }

        if (selectedFilters.includes('medicinaEChirurgia')) {
            filterConditions.push('FIND("Medicina e chirurgia", {tipoLavoro})');
        }

        if (selectedFilters.includes('scienzeMatematiche')) {
            filterConditions.push('FIND("Scienze matematiche e fisiche", {posizioneLavoro})');
        }

        if (selectedFilters.includes('altro(corsoLaurea)')) {
            filterConditions.push('FIND("Altro", {posizioneLavoro})');
        }

        if (selectedFilters.includes('economia')) {
            filterConditions.push('FIND("Economia", {posizioneLavoro})');
        }

        if (selectedFilters.includes('lingueEcultureModerne')) {
            filterConditions.push('FIND("Lingue e culture moderne", {tipoLaurea})');
        }

        if (selectedFilters.includes('scienzeDellaFormazione')) {
            filterConditions.push('FIND("Scienze della formazione", {tipoLaurea})');
        }

        if (selectedFilters.includes('scienzePolitiche')) {
            filterConditions.push('FIND("Scienze politiche", {tipoLaurea})');
        }

        const filterFormula = filterConditions.join(' AND ');

        const filterOptions = {
            filterByFormula: filterFormula,
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
    }, [selectedFilters]);

    const indexOfLastCurriculum = currentPage * curriculaPerPage;
    const indexOfFirstCurriculum = indexOfLastCurriculum - curriculaPerPage;
    const currentCurricula = curriculumData.slice(indexOfFirstCurriculum, indexOfLastCurriculum);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };


    return (
        <ThemeProvider theme={theme}>
            <div class="search">
                <div className="left-search">
                    {currentCurricula.length > 0 ? (
                        currentCurricula.map((curriculum) => (
                            <div className="curriculum-view" key={curriculum.id}>
                                <img src={folderImg} className="folder-img" />
                                <div className="field">
                                    <p className="nome-cognome-professione">
                                        {`${curriculum.nome} ${curriculum.cognome} - ${curriculum.professione} (${curriculum.siglaProvinciale})`}
                                    </p>
                                    <br></br>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="not-found">
                            <p>{message}</p>
                        </div>
                    )}
                    <div className="indietro-1">
                        <p className="indietro" onClick={handlePrevPage}>Indietro</p>
                    </div>
                    <div className="avanti-1">
                        <p className="avanti" onClick={handleNextPage}>Avanti</p>
                    </div>
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