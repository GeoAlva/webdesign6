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
                        <h5>Ambito Lavorativo</h5>
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
                        <h5>Competenze Linguistiche</h5>
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

                        <h5>Età</h5>
                        <div class="radioButtons">
                            <FormControl>
                                <RadioGroup
                                    name="radio-buttons-group"
                                    color="secondary"
                                >
                                    <FormControlLabel value="15" control={<Radio color="primary" />} label="15-19" />
                                    <FormControlLabel value="20" control={<Radio color="primary" />} label="20-29" />
                                    <FormControlLabel value="30" control={<Radio color="primary" />} label="30-39" />
                                    <FormControlLabel value="40" control={<Radio color="primary" />} label="40-49" />
                                    <FormControlLabel value="50" control={<Radio color="primary" />} label="50+" />

                                </RadioGroup>
                            </FormControl>
                        </div>

                        <h5>Grado d'istruzione</h5>
                        <div class="radioButtons">
                            <FormControl>
                                <RadioGroup
                                    name="radio-buttons-group"
                                    color="secondary"
                                >
                                    <FormControlLabel value="primaria" control={<Radio color="primary" />} label="Scuola Primaria" />
                                    <FormControlLabel value="secondaria1" control={<Radio color="primary" />} label="Scuola secondaria di primo grado" />
                                    <FormControlLabel value="secondaria2" control={<Radio color="primary" />} label="Scuola secondaria di secondaria grado" />
                                    <FormControlLabel value="triennale" control={<Radio color="primary" />} label="Laurea Triennale" />
                                    <FormControlLabel value="magistrale" control={<Radio color="primary" />} label="Laurea Magistrale" />
                                    <FormControlLabel value="master" control={<Radio color="primary" />} label="Master" />
                                    <FormControlLabel value="dottorato" control={<Radio color="primary" />} label="Dottorato" />

                                </RadioGroup>
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