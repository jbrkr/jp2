import React, {useEffect, useRef, useState} from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';

//install material
//npm install @mui/material @emotion/react @emotion/styled
//yarn add @mui/material @emotion/react @emotion/styled axios


//install axios
// yarn add axios

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';



import DataService from "./dataService";


function Translate(){

  const [lang, setLang] = React.useState('');
  const [srcText, setSrcText] = React.useState('');
  const [textValue, setTextValue] = useState("");

  const [outputText, setOutputText] = React.useState('');

  const handleTextChange = e => {
    console.log(`typed => ${e.target.value}`);
    setTextValue(e.target.value);
  };

  const handleChange = (event) => {
    setLang(event.target.value);
  };


  const submitTranslation = () => {
    console.log("Lang: ")
    console.log(lang)
    console.log("text")
    console.log(textValue)
    console.log("lang + text")
    console.log(lang+" "+textValue)

//    setSrcText(lang)

//    console.log("Search Text")
//    console.log(srcText)
    DataService.Translate(lang+" "+textValue)
    .then(function (response) {
        console.log(response.data)

        setOutputText(response.data)
        //const datasets = setState(response.data[0])
        // Load the documents
        //return DataService.GetDocumentsForAnnotation(response.data[0]["id"])
    })
  }

    return (
        <div>
      <AppBar position='static'>
         <Toolbar>
             <Typography>Fluent Phrase Translation API</Typography>
         </Toolbar>
         </AppBar>




         <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '75ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div
      style={{
        marginTop:20,
      }}
      
      >
        <TextField 
        label="Translate" 
        id="outlined-size-normal" 
        defaultValue="Input Phrase to Translate"  
        value={textValue} 
        onChange={handleTextChange}
        />
      </div>
     
    </Box>


    <div>

    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={'>>fr<< '}>French</MenuItem>
          <MenuItem value={'>>it<< '}>Italian</MenuItem>
          <MenuItem value={'>>es<< '}>Spanish</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
      <Button variant="contained" onClick={submitTranslation}>Contained</Button>
      </FormControl>
    </div>


    <div
    style={{
        marginTop:20,
        
        fontSize: 40,
        
      }}
    >
    
        {outputText}
    
    </div>




    </div>

      

    );
}
export default Translate;