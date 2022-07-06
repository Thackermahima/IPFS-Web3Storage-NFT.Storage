import React, { useState } from 'react'
import { Web3Storage } from 'web3.storage';
import './App.css';

const apiToken =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEIzOEQzNkJhOTIwOWU0NDhCMzZEOGYwNzQ2MzE4ZGFiNmUyNzUwQmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTcwMTU4NDM0MTEsIm5hbWUiOiJ3ZWIzLXN0b3JhZ2UtZXgifQ.fmog4Jf18PBhVg201klNdWIiOLaxZM82tY1YjoBSTB4';
const client = new Web3Storage({ token: apiToken });

const Web3storage = () => {
  const [file, setFile] = useState("");
  async function web3upload(){
    console.log(document.getElementById("input").files[0]);
    var fileInput = document.getElementById("input");
    const rootCid = await client.put(fileInput.files);
    console.log(rootCid);

    const res = await client.get(rootCid);
    const files = await res.files();
    const url = URL.createObjectURL(files[0]);
    setFile(url);
  }
    return (
      <div className="App">
        <h1>Web3Storage - Example</h1>  
        <div>
          <input type="file" id="input" onChange={web3upload} />
          {
         file && (
          <img src={ file } width="600px" />
        )
      }
        </div>
      </div>
    );
  };




export default Web3storage
