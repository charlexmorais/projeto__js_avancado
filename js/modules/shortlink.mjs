import { hideloadIng } from "./tools.js"

export function postDataLink() {
  const urlInput = document.getElementById('input-field').value;
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: "sk_cLUlPAw7VcmekH0r",
    },
    body: JSON.stringify({
      domain: "91ng.short.gy",
      originalURL: urlInput,
    }),
  };

  fetch("https://api.short.io/links", options)
    .then((response) => {
      if (response.ok && response.status === 200) {
        hideloadIng()
        return response.json();
      } else {
        throw new Error("Falha ao consultar a API");
      }
    })
    .then((data) => {
      console.log(data);
      console.log("Post salvo com sucesso");
    })
    .catch((error) => {
      if (error.response && error.response.status === 409) {
        console.error("Já existe um link com esse nome ou URL");
      } else {
        console.error(error);
      }
    });
}
