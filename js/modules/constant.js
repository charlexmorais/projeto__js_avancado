const domainName = localStorage.getItem("hostname");
const domainId = localStorage.getItem("id");
export const logoPageone=document.getElementById("back-page") // logo da pagina1
export const logoPagetwo=document.getElementById("backpagetwo") // logo da pagina2
export const loadIng = document.getElementById("loading"); // referente ao status carregando da pagina
export const inputField = document.querySelector("#input-field"); // campo de preenchimento para encurta url
export const btnShorten = document.querySelector("#btn-shorten"); // botao encurtar
export const linkInitial = document.querySelector("#icon-initial"); // referente ao icone de inicio de tela
export const shareButtons = document.querySelector(".btn-actions"); // conteiner  copiar ,compartilhar qr code
export const btnActions = document.querySelector(".btn-shorten"); // class btn-shorten pegandos todo os botoes copiar,compartilhar ,qr code
export const btncopying = document.querySelector("#copy"); // botao copiar
export const resultScreen = document.getElementById("result-container"); // resultado da url encurtada na pagina
export const btnSharing = document.getElementById("sharing"); // botoao de compartilhamento
export const resultShares = document.getElementById("result-shares"); // conteiner de icones whatsAp,linkedin,twitter
export const whatsLink = document.getElementById("whats"); // abrindo pagina
export const linkedinLink = document.getElementById("linkedin"); // abrindo nova pagina
export const twitterLink = document.getElementById("twitter"); // abrindo nova pagina
export const inputWhastLink = document.querySelector("sharing-input"); // campo pra preenchimento de contato
export const whatsAppBtn = document.getElementById("whats"); // icone whatsApp
export const sharingInput = document.getElementById("field-whats") // input do campo de preenchimento de contato
export const btnValidacao = document.getElementById("btn-shipping") // botao de envio  de contato whatsApp
export const btnQrcode =document.getElementById("btn-qrcode") // botao qr code
export const btnsalvePng = document.getElementById("salvarpng"); // dowload qrcode em png
export const conteinerPng = document.querySelector(".your-container");// conteiner qr code 
export const btnlistTable =document.querySelector(".vetor-list") // listando links na tabela 
export const sectionpageHome=document.querySelector(".container")
export const sectiontablelink=document.querySelector(".table-link")
export const resultContainer = document.getElementById("resultLinks");
export const linkTableBody = document.getElementById('linkstable');



