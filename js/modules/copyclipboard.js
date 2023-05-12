export function copyToClipboard(short) {
  // copiando url para area de transferencia

  navigator.clipboard.writeText(short).then(
    () => {
      (`Copiado: ${short}`);
      message("success", "Url copiada com sucesso");
    },
    (err) => {
      (`Falha na cópia: ${err}`);
      message("error", "Falha na cópia");
    }
  );
}

export function message(tipo, mensagem) {
  //  funcao pra retorno de mensagem
  // mensagens de erro e sucesso
  // argumentos tipo e mensagem
  const alertaMensagem = document.createElement("div");
  alertaMensagem.textContent = mensagem;
  alertaMensagem.className = tipo;
  document.body.appendChild(alertaMensagem); // adiciona elemento na pagina
  setTimeout(function () {
    // adicionado tempo e removendo
    alertaMensagem.style.opacity = "0";
    setTimeout(function () {
      document.body.removeChild(alertaMensagem);
    }, 3000);
  }, 3000);
}
