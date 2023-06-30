import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Airtable from 'airtable';
import Cookies from 'universal-cookie';
import "./curriculum.css";
import profilePhoto from "../profile/profilePhoto.svg"
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Curriculum(){

    const cookie = new Cookies();
    const email= cookie.get('email');

    const [message, setMessage] = useState("");
    const [curriculumData, setCurriculumData] = useState([]);

    const filterCurriculum = () => {
        const base = new Airtable({ apiKey: 'keyIXV1obmywgbWZE' }).base('app7EHcO1NO4VD6sc');
      
        

        const filterOptions = {
          filterByFormula: `Email = '${email}'`,
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
              dataNascita : record.fields.dataNascita,
              indirizzo: record.fields['Indirizzo residenza'],
              tel: record.fields.Telefono,
              fb: record.fields.Facebook,
              ig: record.fields.Instagram,
              yt: record.fields.Youtube,
            };
          });

          
      
          setCurriculumData(filteredData);
      
          if (filteredData.length === 0) {
            setMessage("NOT FOUND");
          } else {
            setMessage("");
          }
        });
      };

      useEffect(() => {
        filterCurriculum();
      }, []);

    return(
        <div className='curriculum'>
            <div className="lowLayer">
                <div className="upLayer">
                
                    <div class="leftInfo">
                        <div className="profile">
                            <img className="profileImg" src={profilePhoto} alt="Profile"></img>
                            {curriculumData.map((curriculum) => (
                            <div key={curriculum.id} class="utilities">
                                <p className="nome_cognome">{curriculum.nome} {curriculum.cognome}</p>
                                <p classname="profesione">Professione</p>
                                <p className="data">{curriculum.dataNascita}</p>
                            </div>
                            ))}
                        </div>
                        <div className="container">
                            {curriculumData.map((curriculum) => (
                            <div className="dataContainer"> 
                                <p className="contatti">Contatti</p>
                                    <div class="utilsData"><LocationOnIcon sx={{color:"#087A87"}}></LocationOnIcon><p class="utilsDescription">{curriculum.indirizzo}</p></div>
                                    <div class="utilsData"><PhoneIcon sx={{color:"#087A87"}}></PhoneIcon><p class="utilsDescription">{curriculum.tel}</p></div>
                                    <div class="utilsData"><EmailIcon sx={{color:"#087A87"}}></EmailIcon> <p class="utilsDescription">{email}</p></div>
                                    <div class="utilsData"><LanguageIcon sx={{color:"#087A87"}}></LanguageIcon></div>
                            </div>
                            ))}
                            <div>
                                <p className="lingue" style={{marginLeft:"10px"}}>Lingue</p>
                                <div></div>
                            </div>
                            {curriculumData.map((curriculum) => (
                            <div className="dataContainer">
                                <p className="lingue">Social</p>
                                <div class="utilsData"><LinkedInIcon sx={{color:"#087A87"}}></LinkedInIcon><p class="utilsDescription">{curriculum.fb}</p></div>
                                <div class="utilsData"><FacebookRoundedIcon sx={{color:"#087A87"}}></FacebookRoundedIcon><p class="utilsDescription">{curriculum.fb}</p></div>
                                <div class="utilsData"><InstagramIcon sx={{color:"#087A87"}}></InstagramIcon><p class="utilsDescription">{curriculum.ig}</p></div>
                                <div class="utilsData"><YouTubeIcon sx={{color:"#087A87"}}></YouTubeIcon><p class="utilsDescription">{curriculum.yt}</p></div>
                            </div>
                            ))}
                            <div>
                                <p className="lingue" style={{marginLeft:"10px"}}>Hobby</p>
                            </div>
                        </div>
                    </div>
                    <div class="rightInfo">
                        <p className="sesso">Sesso:Sesso/Nazionalità:Nazionalità</p>
                        <div>
                            <div class="section">
                                <h1 className="titleSez"><SchoolIcon sx={{
                                    color:"#FFFF", 
                                    backgroundColor:"#087A87",
                                    borderRadius:"25px",
                                    height:"35px",
                                    width:"35px",
                                    marginRight:"25px",
                                    marginTop:"10px"}}>
                                    </SchoolIcon>Istruzione e formazione</h1>
                            </div>
                            <div class="section">
                                <h1 className="titleSez"><BusinessCenterIcon sx={{
                                    color:"#FFFF", 
                                    backgroundColor:"#087A87",
                                    borderRadius:"25px",
                                    height:"35px",
                                    width:"35px",
                                    marginRight:"25px",
                                    marginTop:"10px"}}>
                                    </BusinessCenterIcon>Esperienze lavorative</h1>
                            </div>
                                <h1 className="titleSez"><SchoolIcon sx={{
                                    color:"#FFFF", 
                                    backgroundColor:"#087A87",
                                    borderRadius:"25px",
                                    height:"35px",
                                    width:"35px",
                                    marginRight:"25px",
                                    marginTop:"10px"}}>
                                    </SchoolIcon>Esperienze extra-lavorative</h1>
                            <div class="section">
                                <h1 className="titleSez"><HistoryEduIcon sx={{
                                    color:"#FFFF", 
                                    backgroundColor:"#087A87",
                                    borderRadius:"25px",
                                    height:"35px",
                                    width:"35px",
                                    marginRight:"25px",
                                    marginTop:"10px"}}>
                                    </HistoryEduIcon>Competenze</h1>
                            </div>
                            <div class="section">
                                <h1 className="titleSez"><ErrorOutlineIcon sx={{
                                    color:"#FFFF", 
                                    backgroundColor:"#087A87",
                                    borderRadius:"25px",
                                    height:"35px",
                                    width:"35px",
                                    marginRight:"25px",
                                    marginTop:"10px"}}>
                                    </ErrorOutlineIcon>Altre informazioni</h1>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        )
    ;
}