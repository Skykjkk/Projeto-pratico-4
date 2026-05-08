const botao = document.getElementById("botaoGerar");
botao.addEventListener("click", processarDados);

function processarDados() {
  let nome = document.getElementById("campoNome").value;
  let n1 = Number(document.getElementById("campoNota1").value);
  let n2 = Number(document.getElementById("campoNota2").value);

  let mediaCalculada = (n1 + n2) / 2;

  let tabela = document.getElementById("corpoDaTabela");
  tabela.innerHTML = `
    <tr>
      <td>${nome}</td>
      <td>${n1}</td>
      <td>${n2}</td>
      <td>${mediaCalculada.toFixed(1)}</td>
    </tr>
  `;

  desenharGrafico(n1, n2, mediaCalculada);
}

function desenharGrafico(nota1, nota2, media) {
  const painel = document.getElementById("grafico");
  const pincel = painel.getContext("2d");

  pincel.clearRect(0, 0, painel.width, painel.height);

  let alt1 = nota1 * 20;
  let alt2 = nota2 * 20;
  let altM = media * 20;

  pincel.fillStyle = "#ffc0cb";
  pincel.fillRect(50, 250 - alt1, 80, alt1);

  pincel.fillStyle = "#e6e6fa";
  pincel.fillRect(180, 250 - alt2, 80, alt2);

  pincel.fillStyle = "#ff8fa3";
  pincel.fillRect(310, 250 - altM, 80, altM);

  pincel.fillStyle = "#d11d53";
  pincel.font = "bold 16px Arial";
  pincel.fillText("Nota 1", 60, 275);
  pincel.fillText("Nota 2", 190, 275);
  pincel.fillText("Média", 325, 275);

  pincel.fillText(nota1, 78, 240 - alt1);
  pincel.fillText(nota2, 208, 240 - alt2);
  pincel.fillText(media.toFixed(1), 338, 240 - altM);
}