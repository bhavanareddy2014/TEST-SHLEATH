import { Paper, TableContainer,TableBody,TableCell,TableRow, Typography } from '@material-ui/core'
import React from 'react';
import {makeStyles} from '@material-ui/core';
import {useTheme,Table,TableHead,Checkbox} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root:{
    padding:'15px 30px',
    borderRadius:'20px',
    maxHeight:"500px",
    overflow:"auto"
  },
  tabelCell: {
    backgroundColor: "#ffffff",
    fontSize:'1rem',
    color:"#7C8DC1",
    letterSpacing:0.5,
    fontWeight:600
  },
  tabelBody: {
    color: "#ffffff",
  },
  tabelBodyCell: {
    padding: "35px 8px",
  },
    container: {
        scrollBehavior: "smooth",
        overflow: "auto",
        overflowX: "hidden",
      },
      header:{
        color:"#404965",
        fontSize:"22px",
        fontWeight:700,
        padding:'30px 20px'
      }
  }));

function GenericTable({
    arrHeaders,
    isFixed,
    dense,
    arrRows,
    onRowClick,
    render,
    mobileViewRowComponent,
    noResponseComponent,
    footerComponent,
    handleCheckbox,
    selectedPosition,
    selectAll,
}) {
    const classes = useStyles();
    const theme = useTheme();
  return (
    <>

     <Paper className={classes.root}>
      <Typography className={classes.header}>
      ALL ITEMS
      </Typography>
      <TableContainer className={classes.container}>
      <Table
      size={dense ? "small" : "medium"}
      stickyHeader
      aria-label="sticky table"
      className={isFixed ? classes.tableFixed : classes.tableAuto}
      style={{ position: "relative" }}
    >
    <TableHead>
    {arrRows?.length > 0 && (
      <TableRow>
      {arrHeaders.map(({ label, keyName, muiStyling = {} }, i) =>
      keyName === "checkbox" ? (
        <TableCell
          classes={{
            root: classes.tabelCell,
          }}
          key={keyName}
          align={muiStyling.align}
        >
        </TableCell>
      ) : arrRows.length === 0 ? (
        " "
      ) : (
        <TableCell
        classes={{
          root: classes.tabelCell,
        }}
        key={keyName}
        align={muiStyling.align}
      >
          {label}
      </TableCell>
      )
    )}
      </TableRow>
    )}
  </TableHead>
   <TableBody>
     {arrRows.map((row,i) => (
        <TableRow key={i}>
           <>
           {arrHeaders.map(({label,keyName,formatter,muiStyling={}},j) => {
             if(keyName ==="checkbox"){
                return (
                    <TableCell
                      className={classes.tabelBodyCell}
                      key={j}
                      align={muiStyling.align}
                    >
                      {arrRows.length > 0 && (
                        <Checkbox
                          size="small"
                        />
                      )}

                    </TableCell>
                  );
             }
              else {
                return (
                  <TableCell
                    key={j}
                  >
                    {formatter && typeof formatter === "function"
                      ? formatter(row)
                      : row[keyName]}
                  </TableCell>
                );
              }
             
            })}
           </>
        </TableRow>
     )

     )}
   </TableBody>
    </Table>
      </TableContainer>
     </Paper>
    </>
  )
}

export default GenericTable