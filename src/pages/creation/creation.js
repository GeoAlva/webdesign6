import "./creation.css";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

export default function Create() {
    return (

        <div class="search">
            <div class="left-search">
                
                <Typography
                        variant='h4'>
                        <Box sx={{ fontWeight: 'bold', m: 1 }}>Come ti chiami?</Box>
                </Typography>
                <TextField id="Nome" variant="standard" class="textIn" placeholder="Nome"/>
                <br></br>
                <TextField id="Cognome" variant="standard" class="textIn" placeholder="Cognome"/>

                <Typography
                        variant='h4'>
                        <Box sx={{ fontWeight: 'light', m: 1 }}>Domanda successiva</Box>
                </Typography>

            </div>

            <div class="bg">

                <p class="creation">
                    Rispondi alle seguenti <br></br>
                    domande per la <br></br>
                    compilazione del tuo <br></br>
                    curriculum
                </p>                    

            </div>

        </div >


    )
}