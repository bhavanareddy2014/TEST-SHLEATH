import React, { useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Grid, Paper } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

export default function AddModal() {
    const navigate = useNavigate()
    const [postData, setPostData] = useState( {
        Name: "",
        Type: "",
    })
    const url = "https://646312614dca1a661353d0ee.mockapi.io/api/Files"
    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            Name: postData.Name,
            Type: postData.Type
        })
            .then(response =>  {
                if(response.data){
                navigate("/dashboard")
                // navigate("/dashboard")
                }
            })
    }
    
    function handleSubmit(e) {
        const newData = { ...postData }
        newData[e.target.id] = e.target.value
         setPostData(newData)
    }

    return (
        <div style={{padding:"200px",backgroundColor:"#EEF3FA",height:"100vh"}}>
                  
                     <form onSubmit={(e) => submit(e)}>
                     <div>
                         <Grid  container spacing={2}  direction="row" alignItems="center">
                         <Grid item xs={12} align="center" >
                             <TextField id="Name"
                                 required
                                 placeholder="Enter your Name"
                                 label="Name"
                                 name="name"
                                 size="small"
                                 variant="outlined"
                                 InputLabelProps={{ shrink: true }}
                                 value={postData?.Name}
                                 onChange={(e) => handleSubmit(e)}
                             />
                             </Grid>
                             <Grid item xs={12} align="center">
                                 <TextField id="Type"
                                     requried
                                     placeholder="Enter your Type"
                                     label="Type"
                                     name="type"
                                     size="small"
                                     variant="outlined"
                                     InputLabelProps={{ shrink: true }}
                                     value={postData.Type}
                                     onChange={(e) => handleSubmit(e)}
                                 />
                             </Grid>
                             <Grid item xs={12} align="center">
                             <Button onClick={(e) => submit(e)} disabled={postData?.Name === ""} color="primary">
                             Add
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