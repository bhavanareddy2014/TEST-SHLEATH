import { Checkbox, Typography } from '@material-ui/core';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles} from '@material-ui/core';
import {useTheme} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root:{
     display:'flex'
  },
  header:{
    fontSize:"18px",
    fontWeight:700,
    color:"#404965",
    padding:'50px 0px'
  },
  subHeader:{
   fontSize:'18px',
   fontWeight:700,
   color:"#404965",
   padding:'20px 0px'
  },
  items:{
    fontSize:'1rem',
    fontWeight:600,
    color:"#404965",
    padding:'10px 0px'
  },


  }));



function Categories() {
  const classes = useStyles();
  const theme = useTheme();
  const [data,setData] = useState([])
  const handleChange = (event) => {
    const index = data.indexOf(event.target.value)
    if(index === -1){
      setData([...data,event.target.value])
    }
    else {
      setData(data.filter((item) => item !==  event.target.value))
    }
  };

  const getDetailsData = async () => {
    try {
      const response = await axios.get("https://646312614dca1a661353d0ee.mockapi.io/api/Category")
      setData(response.data)

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getDetailsData()
  }, [])
  return (
    <>
     <div style={{marginLeft:'200px'}}> 
    <Typography className={classes.header}>
       CATEGORIES
    </Typography>
     <div>
      {data?.map((item,i) => 
     <FormControl style={{display:"flex"}} key={i} >
     <FormLabel key={i} className={classes.subHeader}>{item.Name}</FormLabel>
    { item.Labels?.map((item) =><FormGroup key={i}>
      <FormControlLabel
        control={<Checkbox  onChange={handleChange} name={item.Name} />}
        label= {<Typography className={classes.items}>{item.Name}</Typography>}
      />
    </FormGroup> ) }
   </FormControl>
      )}
      </div>
    </div> 
    </>
  )

}

export default Categories