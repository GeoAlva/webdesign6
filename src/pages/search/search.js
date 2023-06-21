import "./search.css";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

export default function Search() {
    return (

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
            <div class="right-form">




                <div class="bg">
                </div>


            </div>
        </div >


    )
}