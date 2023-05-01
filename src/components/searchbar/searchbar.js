import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

import "./searchbar.css"



function SearchBar() {
    return (
        <>
            <div className='searchBar-container'>
                <div className='carousel'>
                    <Typography
                        variant='h4'>
                        <Box sx={{ fontWeight: 'bold', m: 1 }}>Stai Cercando<br></br> un Curriculum?</Box>

                    </Typography>
                    <Paper
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, backgroundColor: '#007987', borderRadius: '40px' }}
                    >

                        <InputBase
                            sx={{ ml: 1, flex: 1, color: '#ffffff' }}
                            placeholder="Cerca nel server"
                            inputProps={{ 'aria-label': 'Cerca nel server' }}
                        />
                        <IconButton type="button" sx={{ p: '10px', color: '#ffffff' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>

                </div>
            </div >
        </>
    )
}

export default SearchBar;