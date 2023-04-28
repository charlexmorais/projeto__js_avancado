import { getDataDomain } from "./domainlist.mjs"
import { postDataLink } from "./shortlink.mjs"








const btnshorten=document.querySelector("#shorten")
getDataDomain()
btnshorten.addEventListener("click",()=>postDataLink()) 
 
 
 // funcao pra dar alert sucesso e mostrar link no pagina

 


