import './profile.css'
import '../login/login.css'
import profilePhoto from "./profilePhoto.svg"
import pencil from "./pencil.svg"
import Cookies from 'universal-cookie';
import Button from '@mui/material/Button';
import React from 'react';
import Airtable from 'airtable';


export default function Profile(){

    const cookie = new Cookies();
    
    const email= cookie.get('email');


    return(
        <>
         <div class='profile'>
            <div class='left'>
                <div class='user'>
                    <img src={profilePhoto} alt="Profile" width={'195px'} />
                    <p>{email}</p>
                    <Button variant="contained"
                                    //link di test
                                    href="https://airtable.com/shrMHq5TbbUJMNQFw"
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
                                    href="https://airtable.com/shr3QfyQZSmspN6uU"
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

                {/* TODO */}

                <div class='inner'> 
                <h3>Stai cercando personale?</h3>
                <Button variant="outlined"
                    //link di test
                    href="https://airtable.com/shr9QHYnx6MC0bTqL"
                    sx={{
                        width: "312px",
                        height:"51px",
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
                    >Sfoglia i Curriculum</Button>

                    <br /><br /><br /><br /><br /><br />
                    <span><p className='settings'> Impostazioni 
                    <Button onClick={showForm}
                    variant='text' sx={{
                        fontFamily:'Open Sans',
                        textTransform:"none"}}> 
                    <img src={pencil} alt="pencil icon" width={"10px"} />
                     Modifica </Button>
                     </p>
                     </span>
                    

                    <br /><br />

                    <div className='infoGrid'>
                        <div className='mail'>Email</div>
                        <div className='field'>{email}</div>
                        <div className='mail'>Password</div>
                        <div className='field'>*******</div>
                    </div>
                    <div className='update' id='update'>
                        <form action="" className='updateForm'>
                        <div className="update-element">
            <img src="images/update-persona.png" alt="" className="update-icons" />
            <input type="email" id="email" name="email" className="update-form-input" placeholder=" " required />
            <label className="update-floating-label" htmlFor="email">
              E-mail
            </label>
          </div>

          <div className="update-element">
            <img src="images/update-lucchetto.png" alt="" className="update-icons" />
            <input type="password" id="pass" name="pass" className="update-form-input" placeholder=" " required />
            <label className="update-floating-label" htmlFor="pass">
              Password
            </label>
          </div>
          <div className="update-element">
            <img src="images/update-lucchetto.png" alt="" className="update-icons" />
            <input
              type="password"
              id="confirm_pass"
              name="confirm_pass"
              className="update-form-input"
              placeholder=" "
              required
            />
            <label className="update-floating-label" htmlFor="confirm_pass">
              Conferma password
            </label>
          </div>

          <input type="submit" id="submit" name="submit" value="Conferma" className="update-btn" />
                    <Button variant='text' 
                    onClick={showForm}
                    sx={{
                        textDecoration:'underline',
                        fontFamily:'Open Sans',
                        fontWeight:'bold',
                        fontSize:'24',
                        textTransform:"none",
                        }}> 
                     Annulla </Button>                    
                     </form>

                    </div>
                    

                    </div>

                    
            </div>
         </div>
        </>
    )
}


function showForm(){
    var show = document.getElementById('update');
    if (show.style.display === "none") {
        show.style.display = "block";
      } else {
        show.style.display = "none";
      }
}
