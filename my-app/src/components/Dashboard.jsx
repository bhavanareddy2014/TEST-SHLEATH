import React from 'react';
import Navbar from './NavBar';
import FileDetails from './FileDetails';
import { Grid } from '@material-ui/core';
import Categories from './Categories';


function Dashboard() {
    return (
        <>
        <div>
         <Navbar/>
          <div style={{padding:'100px',backgroundColor:"#EEF3FA",height:"100vh"}}>
          <div style={{height:"100vh",}}>
          <Grid container alignContent='center'>
          <Grid item xs={4}>
             <Categories/>
          </Grid>
          <Grid item xs={8}>
             <FileDetails/>
          </Grid>
          </Grid>
        </div>
          </div>
        </div>
        </>
    );
}

export default Dashboard;