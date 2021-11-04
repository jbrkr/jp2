import React, {useEffect, useRef, useState} from 'react';
import DataService from "./services";

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

  const handleInputChange = e => {
    console.log(`typed => ${e.target.value}`);
    setTextValue(e.target.value);
  };


  const submitTranslation = () => {
    console.log("Lang: ")
    console.log(lang)
    console.log("text")
    console.log(textValue)
    console.log("lang + text")
    console.log(lang+" "+textValue)

    DataService.Translate(lang+" "+textValue)
    .then(function (response) {
        console.log(response.data)
        setOutputText(response.data)
    })
  }


  const frenchTranslation = () => {
    console.log("Lang: ")
    console.log(lang)
    console.log("text")
    console.log(textValue)
    console.log("lang + text")
    console.log(lang+" "+textValue)
    DataService.Translate(">>fr<<"+" "+textValue)
    .then(function (response) {
        console.log(response.data)
        setOutputText(response.data)
    })
  }

  const italianTranslation = () => {
    console.log("Lang: ")
    console.log(lang)
    console.log("text")
    console.log(textValue)
    console.log("lang + text")
    console.log(lang+" "+textValue)
    DataService.Translate(">>it<<"+" "+textValue)
    .then(function (response) {
        console.log(response.data)
        setOutputText(response.data)
    })
  }

  const spanishTranslation = () => {
    console.log("Lang: ")
    console.log(lang)
    console.log("text")
    console.log(textValue)
    console.log("lang + text")
    console.log(lang+" "+textValue)
    DataService.Translate(">>es<<"+" "+textValue)
    .then(function (response) {
        console.log(response.data)
        setOutputText(response.data)
    })
  }


    return (
        <div>

          <div style={{marginTop:20, width: '100%'}}>
            <input 
            value={textValue} 
            onChange={handleTextChange}
            style={{type: 'text', width: '80%'}}
            />
          </div>
         
          <div>
            <button onClick={spanishTranslation}>ES</button>
            <button onClick={frenchTranslation}>FR</button>
            <button onClick={italianTranslation}>IT</button>
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