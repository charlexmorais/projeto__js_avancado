import { apikey } from "../../config.js";

export function getDataDomain() { //listando dominios 
  if (!localStorage.getItem("id") || !localStorage.getItem("hostname")) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${apikey}`,
      },
    };
    

    fetch("https://api.short.io/api/domains", options) 
      .then((response) => {
        if (response.ok && response.status === 200) {
          return response.json();
        } else {
          throw new Error("Falha ao consultar a API");
        }
      })
      .then((data) => {
      
        console.log(data);
        localStorage.setItem("id", data[0].id);
        localStorage.setItem("hostname", data[0].hostname);
      })
      .catch((error) => console.error(error));
  }
}
