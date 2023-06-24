import './profile.css'
import profilePhoto from "./profilePhoto.svg"
import Cookies from 'universal-cookie';
import Button from '@mui/material/Button';


export default function Profile(){

    const cookie = new Cookies();
    
    const email= cookie.get('email');


    return(
        <>
         <div class='profile'>
            <div class='left'>
                <div class='user'>
                    <img src={profilePhoto} alt="Profile Photo" width={'195px'} />
                    <p>{email}</p>
                    <Button variant="contained"
                                    href="/login"
                                    sx={{
                                        width: "318px",
                                        mt:"20px",
                                        mb:"30px",
                                        px: 3,
                                        fontWeight: 'bold',
                                        borderRadius: '30px',
                                        fontFamily: 'Open Sans',
                                        fontSize: "15px",
                                        textTransform: 'none',
                                        backgroundColor: '#087A87',
                                        color: '#ffffff',
                                    }}
                                >Crea Curriculum</Button>

                                <Button variant="outlined"
                                    href="/curriculum"
                                    sx={{
                                        width: "318px",
                                        mb:"30px",
                                        px: 3,
                                        fontWeight: 'bold',
                                        borderRadius: '30px',
                                        fontFamily: 'Open Sans',
                                        fontSize: "15px",
                                        textTransform: 'none',
                                        border: "3px solid #008080",
                                        backgroundColor: '#ffffff',
                                        color: '#000000',
                                        '&:hover': {
                                            color: '#008080',
                                            border: "3px solid #008080",
                                        },
                                    }}
                                >Visualizza Curriculum</Button>

                                <Button variant="outlined"
                                    href="https://airtable.com/shr2loovuRXne75ML"
                                    sx={{
                                        width: "318px",
                                        mb:"30px",
                                        px: 3,
                                        fontWeight: 'bold',
                                        borderRadius: '30px',
                                        fontFamily: 'Open Sans',
                                        fontSize: "15px",
                                        textTransform: 'none',
                                        border: "3px solid #008080",
                                        backgroundColor: '#ffffff',
                                        color: '#000000',
                                        '&:hover': {
                                            color: '#008080',
                                            border: "3px solid #008080",
                                        },
                                    }}
                                >Modifica Curriculum</Button>

                </div>
            </div>
            <div class='right'>
            
            </div>
         </div>
        </>
    )
}