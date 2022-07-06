import React, { useState } from "react";
import { NFTStorage, File } from "nft.storage";

const Nftstorage = () => {
  const [NftStorg, setNftStorg] = useState();
  let apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE3MjM0MWI2MTc4RWM0Y2ZFN2MxQzhmN0JDNDIzNDRhRjAxMDhhRUMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NzA4ODQ4NTI4OCwibmFtZSI6Ik5mdC1zdG9yYWdlLWV4In0.C-eMo6pO1p-UmB23_NGmykZiaxSUKWHl0tyYaN0aydM";
  const client = new NFTStorage({ token: apiKey });

  async function NftUpload(e) {
    let file = e.target.files[0];
    let metadata = await client.store({
      name: "Mahima",
      description: "Hey, I am learning web3..",
      image: file,
    });
console.log(metadata)
    setNftStorg(file);
  }
  return (
    <>
      <h1>NftStorage - Example</h1>
      <input type="file" onChange={NftUpload} />
      {NftStorg && (
        <div>
          <img src={URL.createObjectURL(NftStorg)} width="600px" />
        </div>
      )}
    </>
  );
};

export default Nftstorage;
