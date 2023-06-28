import "../login/login.css";
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
import { Margin } from "@mui/icons-material";
import Grid from '@mui/material/Grid';


const theme = createTheme({
    palette: {
        primary: {
            main: '#008080',
            contrastText: '#fff',
        },
    },
});

export default function Search() {
    return (
        <ThemeProvider theme={theme}>
            <div class="search">
                <div class="left-search">

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
                            href='/search'
                            sx={{
                                p: '10px',
                                color: '#ffffff',
                            }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>


                </div>
                <div class="right-filters">
                    <h4>Filtri</h4>
                    <div class="filters">

                        <h5>Data di pubblicazione</h5>
                        <div class="radioButtons">
                            <FormControl>
                                <Grid container spacing={20}>
                                    <Grid item xs={6} sm={3}>
                                        <RadioGroup name="radio-buttons-group" color="secondary">
                                            <FormControlLabel value="qualsiasiMomento" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>In qualsiasi momento</span>} labelPlacement="end" />
                                            <FormControlLabel value="ultime24Ore" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Ultime 24 ore</span>} labelPlacement="end" />
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <RadioGroup name="radio-buttons-group" color="secondary">
                                            <FormControlLabel value="ultimaSettimana" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Ultima settimana</span>} labelPlacement="end" />
                                            <FormControlLabel value="UltimoMese" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Ultimo mese</span>} labelPlacement="end" />
                                        </RadioGroup>
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </div>

                        <h5>Tipo di lavoro</h5>
                        <div class="radioButtons">
                            <FormControl>
                                <Grid container spacing={20}>
                                    <Grid item xs={6} sm={3}>
                                        <RadioGroup name="radio-buttons-group" color="secondary">
                                            <FormControlLabel value="fullTime" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Full-time</span>} labelPlacement="end" />
                                            <FormControlLabel value="stage" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Stage</span>} labelPlacement="end" />
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <RadioGroup name="radio-buttons-group" color="secondary">
                                            <FormControlLabel value="partTime" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Part-time</span>} labelPlacement="end" />
                                        </RadioGroup>
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </div>

                        <h5>In sede/da remoto</h5>
                        <div class="radioButtons">
                            <FormControl>
                                <Grid container spacing={20}>
                                    <Grid item xs={6} sm={3}>
                                        <RadioGroup name="radio-buttons-group" color="secondary">
                                            <FormControlLabel value="inSede" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>In sede</span>} labelPlacement="end" />
                                            <FormControlLabel value="sedeERemoto" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>In sede e da remoto</span>} labelPlacement="end" />
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <RadioGroup name="radio-buttons-group" color="secondary">
                                            <FormControlLabel value="daRemoto" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Da remoto</span>} labelPlacement="end" />
                                            <FormControlLabel value="sedeORemoto" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>In sede e/o da remoto</span>} labelPlacement="end" />
                                        </RadioGroup>
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </div>

                        <h5>Tipo di diploma</h5>
                        <div class="radioButtons">
                            <FormControl>
                                <Grid container spacing={20}>
                                    <Grid item xs={6} sm={3}>
                                        <RadioGroup name="radio-buttons-group" color="secondary">
                                            <FormControlLabel value="triennale" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Laurea triennale</span>} labelPlacement="end" />
                                            <FormControlLabel value="magistrale" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Laurea magistrale</span>} labelPlacement="end" />
                                            <FormControlLabel value="cicloUnico" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Laurea a ciclo unico</span>} labelPlacement="end" />
                                            <FormControlLabel value="vecchioRodinamento" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Laurea vecchio ordinamento</span>} labelPlacement="end" />
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <RadioGroup name="radio-buttons-group" color="secondary">
                                            <FormControlLabel value="liceo" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Liceo</span>} labelPlacement="end" />
                                            <FormControlLabel value="professionale" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Istituto professionale</span>} labelPlacement="end" />
                                            <FormControlLabel value="tecnico" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Istituto tecnico</span>} labelPlacement="end" />
                                            <FormControlLabel value="altro(diploma)" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Altro</span>} labelPlacement="end" />
                                        </RadioGroup>
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </div>

                        <h5>Corso di laurea</h5>
                        <div class="radioButtons">
                            <FormControl>
                                <Grid container spacing={20}>
                                    <Grid item xs={6} sm={3}>
                                        <RadioGroup name="radio-buttons-group" color="secondary">
                                            <FormControlLabel value="architetturaEDesign" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Architettura e design</span>} labelPlacement="end" />
                                            <FormControlLabel value="giurisprudenza" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Giurisprudenza</span>} labelPlacement="end" />
                                            <FormControlLabel value="medicinaEChirurgia" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Medicina e chirurgia</span>} labelPlacement="end" />
                                            <FormControlLabel value="scienzeMatematiche" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Scienze matematiche e fisiche</span>} labelPlacement="end" />
                                            <FormControlLabel value="altro(corsoLaurea)" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Altro</span>} labelPlacement="end" />
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <RadioGroup name="radio-buttons-group" color="secondary">
                                            <FormControlLabel value="economia" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Economia</span>} labelPlacement="end" />
                                            <FormControlLabel value="lingueECultureModerne" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Lingue e culture moderne</span>} labelPlacement="end" />
                                            <FormControlLabel value="scienzeDellaFormazione" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Scienze della formazione</span>} labelPlacement="end" />
                                            <FormControlLabel value="scienzePolitiche" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Scienze politiche</span>} labelPlacement="end" />
                                        </RadioGroup>
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </div>

                        <h5>Professione</h5>
                        <div class="radioButtons">
                            <FormControl>
                                <Grid container spacing={20}>
                                    <Grid item xs={6} sm={3}>
                                        <RadioGroup name="radio-buttons-group" color="secondary">
                                            <FormControlLabel value="architetto" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Architetto</span>} labelPlacement="end" />
                                            <FormControlLabel value="chimico" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Chimico</span>} labelPlacement="end" />
                                            <FormControlLabel value="designer" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Designer</span>} labelPlacement="end" />
                                            <FormControlLabel value="informatico" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Informatico</span>} labelPlacement="end" />
                                            <FormControlLabel value="insegnante" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Insegnante</span>} labelPlacement="end" />
                                            <FormControlLabel value="psicologo" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Psicologo</span>} labelPlacement="end" />
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <RadioGroup name="radio-buttons-group" color="secondary">
                                            <FormControlLabel value="avvocato" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Avvocato</span>} labelPlacement="end" />
                                            <FormControlLabel value="commercialista" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Commercialista</span>} labelPlacement="end" />
                                            <FormControlLabel value="farmacista" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Farmacista</span>} labelPlacement="end" />
                                            <FormControlLabel value="ingegnere" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Ingegnere</span>} labelPlacement="end" />
                                            <FormControlLabel value="medicoChirurgo" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Medico chirurgo</span>} labelPlacement="end" />
                                            <FormControlLabel value="altro(Professione)" control={<Radio color="primary" />} label={<span style={{ whiteSpace: 'nowrap' }}>Altro (specificare)</span>} labelPlacement="end" />
                                        </RadioGroup>
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </div>

                        <h5>Provincia</h5>
                        <Paper
                            sx={{
                                p: '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                width: 300,
                                height: 40,
                                ml: '30px',

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

                                placeholder="Cerca"
                                inputProps={{ 'aria-label': 'Cerca' }}
                            />
                            <IconButton type="button"
                                href='/search'
                                sx={{
                                    p: '10px',
                                    color: '#ffffff',
                                }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>

                        <br />
                        <br />
                        <br />v

                    </div>
                </div>
            </div >

        </ThemeProvider>
    )
}