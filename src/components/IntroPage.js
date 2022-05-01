import React from 'react';
import './IntroPage.css';
import GridViewIcon from '@mui/icons-material/GridView';

function IntroPage() {
    return (
        <div className="tvyomeventintropage">
            <h1>Event Name</h1>
            <div>
            <div className="tvyomeventintropaged1">
                <h2>Introduction :</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <br/>
                
                <h2>Rules :</h2>
                <ul>
                    <li><GridViewIcon style={{transform:'rotate(45deg)',verticalAlign:'middle',fontSize:'18px'}}/>&ensp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li><GridViewIcon style={{transform:'rotate(45deg)',verticalAlign:'middle',fontSize:'18px'}}/>&ensp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li><GridViewIcon style={{transform:'rotate(45deg)',verticalAlign:'middle',fontSize:'18px'}}/>&ensp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li><GridViewIcon style={{transform:'rotate(45deg)',verticalAlign:'middle',fontSize:'18px'}}/>&ensp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
                <br/>
                
                <span style={{fontWeight:'400',color:'rgb(105,105,105)'}}>* Want to participate in this event? <a href="#">First Generate your PID</a></span>
                <br/>
                <br/>
                <button>Register</button>
            </div>
            <div className="tvyomeventintropaged2">
                <img src="https://i.all3dp.com/wp-content/uploads/2015/10/27130922/11950515_1700903740139223_1658642607_n-300x300.jpg" alt="img" />
                <div style={{textAlign:'left'}}>
                    <h2>Event Details:</h2>
                    <h4>Name:</h4><span>event name</span><br/>
                    <h4>Club:</h4><span>club name</span><br/>
                    <h4>Code:</h4><span>event code</span><br/>
                    <h4>Mentor:</h4><span>mentor name</span><br/>
                    <h4>Members:</h4><span>grouped/single</span><br/>
                    <h4>Mentor Email:</h4><span>example@example.com</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default IntroPage
