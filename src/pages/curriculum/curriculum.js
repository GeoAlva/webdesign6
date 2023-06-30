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
                                    <LocationOnIcon sx={{color:"#087A87"}}></LocationOnIcon>
                                    <PhoneIcon sx={{color:"#087A87"}}></PhoneIcon>
                                    <EmailIcon sx={{color:"#087A87"}}></EmailIcon>
                                    <LanguageIcon sx={{color:"#087A87"}}></LanguageIcon>
                            </div>
                            <div>
                                <p className="lingue">Lingue</p>
                                <div></div>
                            </div>
                            <div className="dataContainer">
                                <p className="lingue">Social</p>
                                <LinkedInIcon sx={{color:"#087A87"}}></LinkedInIcon>
                                <FacebookRoundedIcon sx={{color:"#087A87"}}></FacebookRoundedIcon>
                                <InstagramIcon sx={{color:"#087A87"}}></InstagramIcon>
                                <YouTubeIcon sx={{color:"#087A87"}}></YouTubeIcon>
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
    );
}