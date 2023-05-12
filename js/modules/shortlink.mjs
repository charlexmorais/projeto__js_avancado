
import { postQrcode } from "./qrcode.mjs";


import {
  showButtons,
  showingScreen,
  statusChange,
} from "./screenchange.js";
import { clearForm } from "./validation.js";
import { btnQrcode } from "./constant.js";
import {  message } from "./copyclipboard.js";
import { apikey } from "./config.js";

export async function postDataLink() { // encurtando link 
  statusChange(); // mostrando status de carregamento
  const urlInput = document.getElementById("input-field").value;
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `${apikey}`,
    },

    body: JSON.stringify({
      domain: "91ng.short.gy",
      originalURL: urlInput,
    }),
  };

  fetch("https://api.short.io/links", options)
    .then((response) => {
      if (response.ok && response.status === 200) {
        message(
          "success",
          "URL foi encurtado com sucesso. Clique em Copiar ou CTRL + C para copiá-lo."
        );
        return response.json();
      } else {
        message("error", "Falha ao encurtar  a Url");
        throw new Error("Falha ao consultar a API");
      }
    })

    .then((data) => {
      const shortURL = data.shortURL;
      const updatedAt = new Date(data.updatedAt); // data atual
      const updatedAtFormatted = `${updatedAt.toLocaleDateString()} ${updatedAt.toLocaleTimeString()}`;
      const resultContainer = document.getElementById("result-container");
      resultContainer.innerHTML = ` URL: ${shortURL}<br>Link criado em: ${updatedAtFormatted}`;
      clearForm(); // limpando formulario

      showButtons(); // mostrando botoes na tela e icone inicial
     // alternando telas
      showingScreen()
      const idString = data.idString;
      // console.log(idString); // obtem o valor do ID
      btnQrcode.onclick= ()=>postQrcode(idString)
      
    })

    .catch((error) => {
      if (error.response && error.response.status === 409) {
        console.error("Já existe um link com esse nome ou URL");
        z;
      } else {
        console.error(error);
      }
    });
}
