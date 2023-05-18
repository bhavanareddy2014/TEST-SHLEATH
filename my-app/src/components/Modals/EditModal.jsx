import React, { useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Grid, Paper, Typography } from "@material-ui/core";

import { useNavigate, useParams } from 'react-router-dom';

export default function EditModal() {
    const {id} = useParams();
    const navigate = useNavigate()
    const url = "https://646312614dca1a661353d0ee.mockapi.io/api/Files/"+id
    function submit(e) {
        e.preventDefault();
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(empData)
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {setName(data.Name);setType(data.Type);setFile(data.file)});
             navigate('/dashboard')
    }

    const [Name,setName] = useState("");
    const [Type,setType] = useState("");
    const [file,setFile] = useState("");
    const [ModifietAt,setModifietAt]= useState("");
    const empData ={Name,Type,file,ModifietAt}
    const getDetailsData = async () => {
        try {
          const response = await axios.get(url)
          setName(response.data.Name)
          setType(response.data.Type)
          setFile(response.data.file)
          setModifietAt(response.data.ModifietAt)
    
        } catch (error) {
          console.log(error)
        }
      }

    useEffect(() => {
        getDetailsData()
    },[])

    return (
        <div style={{padding:"100px",backgroundColor:"#EEF3FA",height:"100vh"}}>
                  
                     <form onSubmit={(e) => submit(e)}>
                     <div>
                         <Grid  container spacing={2}  direction="row" alignItems="center">
                         <Grid item xs={12} align="center">
                         <Typography variant="h1" color="primary"> Edit Modal</Typography>
                         </Grid>
                         <Grid item xs={12} align="center" >
                             <TextField id="Name"
                                 required
                                 placeholder="Enter your Name"
                                 label="Name"
                                 name="name"
                                 size="large"
                                 variant="outlined"
                                 InputLabelProps={{ shrink: true }}
                                 value={Name}
                                 onChange={(e) => setName(e.target.value)}
                             />
                             </Grid>
                             <Grid item xs={12} align="center">
                                 <TextField id="Type"
                                     requried
                                     placeholder="Enter your Type"
                                     label="Type"
                                     name="type"
                                     size="large"
                                     variant="outlined"
                                     InputLabelProps={{ shrink: true }}
                                     value={Type}
                                     onChange={(e) => setType(e.target.value)}
                                 />
                             </Grid>
                             <Grid item xs={12} align="center">
                             <TextField id="ModifietAt"
                                 requried
                                 placeholder="Enter your Type"
                                 label="ModifietAt"
                                 name="ModifietAt"
                                 size="large"
                                 variant="outlined"
                                 InputLabelProps={{ shrink: true }}
                                 value={ModifietAt}
                                 onChange={(e) =>setModifietAt(e.target.value)}
                             />
                         </Grid>
                             <Grid item xs={12} align="center">
                             <TextField id="file"
                                 requried
                                //  type="file"
                                 placeholder="Enter your Type"
                                 label="Type"
                                 name="type"
                                 size="large"
                                 variant="outlined"
                                 InputLabelProps={{ shrink: true }}
                                 value={file}
                                 onChange={(e) => setFile(e.target.value)}
                             />
                         </Grid>
                             <Grid item xs={12} align="center">
                             <Button onClick={(e) => submit(e)} color="primary">
                             Edit
                            </Button>
                         <Button onClick={ () => navigate('/dashboard')} color="primary">
                         Cancel
                        </Button>
                             </Grid>
                         </Grid>
                     </div>
                 </form>
                   
        </div>
    );
}