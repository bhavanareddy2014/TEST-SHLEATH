import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Grid, Typography } from "@material-ui/core";
import GenericTable from "./common/GenericTable";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import {InputAdornment,TextField,} from "@material-ui/core";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const FileDetails = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  function DateFormat(val) {
    var newVal = val ? val.slice(0, 10) : val
    var day = (newVal).split("-")
    const date = new Date(day[0], day[1] - 1, day[2]);
    const month = date.toLocaleString('default', { month: 'short' });
    return `${day[2]}th   ${month}  '${day[0].slice(2, 4)}`;
  }

  const navigate = useNavigate();
  const deleteRow = (id) => {
     const newData = filteredData.filter((item) => item.id !== id)
     setFilteredData(newData)
  }
  const columnsData = [
    {
      label: "checkbox",
      keyName: "checkbox",
      // muiStyling: { align: "left", width: "4%" },
    },
    {
      label: "NAME",
      keyName: "Name",
      formatter: (row) => <div style={{
        display: "flex", justifyContent: "flex-start", alignItems: "flex-end"
      }}>
        <img width={38} height={38} src={row.preview_image} style={{ borderRadius: "4px" }} /> <br /> <Typography style={{ color: "#404965", fontSize: "1rem", fontWeight: 700, letterSpacing: 0.46, margin: "10px 10px" }}>{row.Name}</Typography>
      </div>
      // muiStyling: { align: "left", width: "20%" },
    },
    {
      label: "OWNER",
      keyName: "Owner",
      formatter: (row) => <img src={row.Owner} height={32} width={32} style={{ borderRadius: "50%" }} />,
      // muiStyling: { align: "left", width: "20%" },
    },
    {
      label: "LABELS",
      keyName: "id",
      formatter: ({ id }) => (
        <Typography
          gutterBottom style={{ color: "#7C8DC1", fontSize: "1rem", fontWeight: 600 }}>
          {`Label ${id}`}
        </Typography>
      ),


      // muiStyling: { align: "left", width: "20%" },
    },
    {
      label: "TYPE",
      keyName: "Type",
      formatter: (row) => (
        <Typography
          gutterBottom style={{ color: "#7C8DC1", fontSize: "1rem", fontWeight: 600 }}>
          {row.Type.toUpperCase()}
        </Typography>
      ),
      // muiStyling: { align: "left", width: "20%" },
    },
    {
      label: "MODIFIED",
      keyName: "ModifietAt",
      formatter: ({ ModifietAt }) => (
        <Typography
          gutterBottom
          style={{ color: "#7C8DC1", fontSize: "1rem", fontWeight: 600 }}
        >
          {ModifietAt && ModifietAt === "N/A" ? "-" : DateFormat(ModifietAt)
          }
        </Typography>
      ),
      // muiStyling: { align: "left", width: "20%" },
    },
    {
      label: "ACTION",
      keyName: "",
      formatter: (row) => (
        <>
        <Button onClick={(e) => {
          e.stopPropagation();  
          navigate(`/edit/${row.id}`)
        }} > <BiEdit fontSize={"30px"} color={"#7C8DC1"}/></Button>
        <Button
        onClick={(e) => {
          e.stopPropagation();
          deleteRow(row.id);
        }}
      >
      <AiFillDelete fontSize={"30px"} color={"#7C8DC1"} />
      </Button>
     
      </>
      )
    },
  ];



    const getDetailsData = async () => {
    try {
      const response = await axios.get("https://646312614dca1a661353d0ee.mockapi.io/api/Files")
      setData(response.data)
      setFilteredData(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDetailsData()
  }, [])

  useEffect(() => {
    const result = data.filter((item) => item.Name.toLowerCase().match(search.toLocaleLowerCase()))
    setFilteredData(result)
  }, [search])
  return (<div>
    <Grid container direction="row" jusfiyContent ="flex-end" style={{padding:'20px 5px'}}>
    <Grid xs={12} align="right" >
    <TextField
    align="right"
    variant="outlined"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder={"search By Name"}
    inputProps={{ "aria-label": "search" }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <AiOutlineSearch/>
        </InputAdornment>
      ),
    }}
  ></TextField>
    </Grid>
  </Grid>
    <GenericTable
      arrHeaders={columnsData}
      arrRows={filteredData}
    />
  
  </div>
  )
}

export default FileDetails;