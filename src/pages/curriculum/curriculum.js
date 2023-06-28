import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Airtable from 'airtable';
import "./curriculum.css";
import profilePhoto from "../profile/profilePhoto.svg"
import { Icon } from '@mui/material';
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
    return(
        <div className='curriculum'>
            <div className="lowLayer">
                <div className="upLayer">
                    <div class="leftInfo">
                        <div className="profile">
                            <img className="profileImg" src={profilePhoto} alt="Profile"></img>
                            <div class="utilities">
                                <p className="nome_cognome">Nome Cognome</p>
                                <p classname="profesione">Professione</p>
                                <p className="data">gg/mm/aaaa</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="dataContainer"> 
                                <p className="contatti">Contatti</p>
                                <LocationOnIcon></LocationOnIcon>
                                <PhoneIcon></PhoneIcon>
                                <EmailIcon></EmailIcon>
                                <LanguageIcon></LanguageIcon>
                            </div>
                            <div>
                                <p className="lingue">Lingue</p>
                            </div>
                            <div className="dataContainer">
                                <p className="lingue">Social</p>
                                <LinkedInIcon></LinkedInIcon>
                                <FacebookRoundedIcon></FacebookRoundedIcon>
                                <InstagramIcon></InstagramIcon>
                                <YouTubeIcon></YouTubeIcon>
                            </div>
                            <div>
                                <p className="lingue">Hobby</p>
                            </div>
                        </div>
                    </div>
                    <div class="rightInfo">
                        <p className="sesso">Sesso:Sesso/Nazionalità:Nazionalità</p>
                        <div>
                            <div class="section">
                                <SchoolIcon class="icon"></SchoolIcon>
                                <h1 className="titleSez">Istruzione e formazione</h1>
                            </div>
                            <div class="section">
                                <BusinessCenterIcon class="icon"></BusinessCenterIcon>
                                <h1 className="titleSez">Esperienze lavorative</h1>
                            </div>
                            <h1 className="titleSez">Esperienze extra-lavorative</h1>
                            <div class="section">
                                <HistoryEduIcon class="icon"></HistoryEduIcon>
                                <h1 className="titleSez">Competenze</h1>
                            </div>
                            <div class="section">
                                <ErrorOutlineIcon class="icon"></ErrorOutlineIcon>
                                <h1 className="titleSez">Altre informazioni</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}