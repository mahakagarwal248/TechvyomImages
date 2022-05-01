import React from 'react';
import './About.css';

function About() {
    return (
        <div className="tvyomstudentdetails">
            <div style={{textAlign:'left'}}>
                <h2>User Details:</h2>
                <h4>Name:</h4><span>Student name</span><br/>
                <h4>Roll No:</h4><span>Student Roll No.</span><br/>
                <h4>PID:</h4><span>Student PID</span><br/>
                <h4>Email:</h4><span>example@example.com</span><br/>
                <h4 style={{marginTop:'22px'}}>Events Registered</h4>
                    <ul style={{display:'inline-block',position:'absolute'}}>
                        <li>Event 1</li>
                        <li>Event 2</li>
                    </ul>
            </div>
        </div>
    )
}

export default About
