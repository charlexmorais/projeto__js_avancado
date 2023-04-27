const options = {
  method: "GET",
  headers: { accept: "application/json", Authorization: "sk_cLUlPAw7VcmekH0r" },
};

fetch(
  "https://api.short.io/api/links?domain_id=707808&limit=30&dateSortOrder=desc",
  options
)// dominio de links
  .then((response) => {
    if (response.ok && response.status === 200) {
      return response.json();
    } else {
      throw new Error("Falha ao consultar a API");
    }
  })
  .then((data) => {
    console.log(data);
    console.log("Post salvo com sucesso");
  })
  .catch((error) => console.error(error));
  
