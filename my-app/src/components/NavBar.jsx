import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:"#FFFF",
    marginLeft:'240px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow:1,
    fontSize: "32px",
    color:"#636363",
    fontWeight:700
  },
  button:{
    color:"#FFFFFF",
    fontSize:'1rem',
    backgroundColor:"#814EE7",
    borderRadius:"10px",
    textTransform: 'none',
    width:'138px',
    height:"43px"
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            File Manager
          </Typography>
          <Button  className={classes.button} onClick={() => navigate("/create") }><AiOutlinePlus size="20px" style={{marginRight:'10px'}}/> <Typography style={{fontSize:"16px",fontWeight:600}}>Upload</Typography>   </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}