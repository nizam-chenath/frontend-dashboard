import React from 'react';
import './dashboarstyle.css';
import logo from "../assets/logo.png"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div>
            <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>Dashboard</li>
          <li>Campaigns</li>
          <li>Commands</li>
          <li>Zones</li>
          <li>Dashboard</li>
          <li>Campaigns</li>
          <li>Commands</li>
          <li>Zones</li>
        </ul>
      </div>
      <div className="content">
        <div className="above-nav"></div>
        <div className='page'>
        <h3>Project</h3>
        <div className='top-card'></div>
        <div className="grid-container">
            <div className="left">
            <div className="card">
            <h3>General information</h3>
            <p>This is the content of Card 1.</p>
          </div>
          <div className="card">
            <h3>Live Statitics</h3>
            <p>This is the content of Card 2.</p>
          </div>
          <div className="card">
            <h3>Device status</h3>
            <p>This is the content of Card 3.</p>
          </div>
          <div className="card">
            <h3>Activity logs</h3>
            <p>This is the content of Card 4.</p>
          </div>
            </div>

            <div className="right">
                <div className="right-upperbox">
                    <h3>Location-Devices</h3>
                </div>
                <div className="right-lowerbox">
                    <h3>Domain Quota</h3>
                </div>
            </div>
          
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
