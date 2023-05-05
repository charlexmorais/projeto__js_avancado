

import { message } from "./tools.js";

const containerPng = document.getElementById("your-container");

export async function postQrcode() {
  const options = {
    method: "POST",
    headers: {
      accept: "image/png",
      "content-type": "application/json",
      Authorization: "sk_cLUlPAw7VcmekH0r",
    },
    body: JSON.stringify({ type: "png" }),
  };

  fetch("https://api.short.io/links/qr/lnk_2Y8g_9dCPkoZDOWZ", options)
    .then((response) => {
      if (response.ok && response.status === 201) {
        message("success", "Ação realizada com sucesso!");
        return response.blob();
      } else {
        message("error", "Falha ao enviar!");
        throw new Error("Falha ao consultar a API");
      }
    })
    .then((data) => {
      console.log(data);
      const imageObjectURL = URL.createObjectURL(data);

      const image = document.createElement("img");
      image.src = imageObjectURL;

      const downloadLink = document.createElement("a");
      downloadLink.href = imageObjectURL;
      downloadLink.download = "qrcode.png";
      downloadLink.textContent = "Download";

      const container = document.getElementById("your-container");
      container.innerHTML = "";
      container.append(image, downloadLink);
    });
}

