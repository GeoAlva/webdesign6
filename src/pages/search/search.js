import "../login/login.css";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

export default function Search() {
    return (

        <div class="login">
            <div class="left-slogan">

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
            <div class="right-form">


                <form action="#" method="post" class="form">
                    <h2 class="benvenuto">Login</h2>


                    <div class="form-element">
                        <img src="images/Persona.png" alt="" class="icons" />
                        <input type="email" id="email" name="email" class="form-input" placeholder=" " required />
                        <label class="floating-label" for="email">Username / e-mail</label>
                    </div>

                    <div class="form-element">
                        <img src="images/Lucchetto.png" alt="" class="icons" />
                        <input type="password" id="pass" name="pass" class="form-input" placeholder=" " required />
                        <label class="floating-label" for="pass">Password</label>
                    </div>
                    <a href="#" class="forgot">Password dimenticata?</a>

                    <input type="submit" id="submit" name="submit" value="Accedi" class="btn" />
                    <p class="account"> Non hai un account?</p>
                    <a href="/signup">Registrati</a>
                    <br />
                </form>

                <div class="bg">
                </div>


            </div>
        </div >


    )
}