

import { apikey } from "./config.js";
import { message } from "./copyclipboard.js";

import {  showingqrcode } from "./screenchange.js";


const containerPng = document.getElementById("your-container");

export async function postQrcode(idString) {
  
  showingqrcode();
  
  const options = {
    method: "POST",
    headers: {
      accept: "image/png",
      "content-type": "application/json",
      Authorization: `${apikey}`,
    },
    body: JSON.stringify({ type: "png" }),
  };

  fetch(`https://api.short.io/links/qr/${idString}`, options)
  
    .then((response) => {
      if (response.ok && response.status === 201 ) {
        return response.blob();
        
      } else {
        message("error", "Falha ao enviar!");
        throw new Error("Falha ao consultar a API");
      }
    })
    .then((data) => {
      console.log(data);
      // criando qr code 
      const imageObjectURL = URL.createObjectURL(data);

      const image = document.createElement("img");
      image.src = imageObjectURL;

      const downloadLink = document.createElement("a");
      downloadLink.href = imageObjectURL;
      downloadLink.download = "qrcode.png";
      downloadLink.textContent = "Download";

      const container = document.querySelector(".your-container");
      container.innerHTML = "";
      container.append(image, downloadLink);
    });
}



