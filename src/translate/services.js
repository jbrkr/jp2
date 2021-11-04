const axios = require('axios');


const DataService = {
    Init: function () {
        // Any application initialization logic comes here
    },
    Translate: async function (text) {
        return await axios.post("https://helsent-prod.jjsr6mk8ktdfs.us-east-2.cs.amazonlightsail.com/invocations", { text: text },  { headers: {'Content-Type': 'application/json'} });
    }
}

export default DataService;



//https://helsent-prod.jjsr6mk8ktdfs.us-east-2.cs.amazonlightsail.com/ping


//curl -X POST -F 'text=>>fr<< hello world!' https://helsent-prod.jjsr6mk8ktdfs.us-east-2.cs.amazonlightsail.com/




//curl -X POST https://helsent-prod.jjsr6mk8ktdfs.us-east-2.cs.amazonlightsail.com/invocations
//   -H 'Content-Type: application/json'
//   -d '{"text":">>fr<< hello world!"}'