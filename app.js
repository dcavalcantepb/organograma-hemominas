const detalhe = document.getElementById('detalhe');
const MENSAGEM_PADRAO = 'Clique em uma unidade para selecioná-la.';
let selecionadaId = null;

function criarCaixa(unidade) {
  const botao = document.createElement('button');
  botao.className = `caixa ${unidade.tipo}`;
  botao.dataset.id = unidade.id;
  botao.textContent = unidade.nome;
  botao.addEventListener('click', () => selecionar(unidade));
  return botao;
}

function criarElo() {
  const elo = document.createElement('span');
  elo.className = 'elo';
  return elo;
}

function selecionar(unidade) {
  selecionadaId = selecionadaId === unidade.id ? null : unidade.id;
  document.querySelectorAll('.caixa').forEach((c) => {
    c.classList.toggle('ativa', c.dataset.id === selecionadaId);
  });
  detalhe.textContent = selecionadaId ? unidade.nome : MENSAGEM_PADRAO;
}

function montar() {
  const coluna = document.getElementById('cadeia');
  cadeia.forEach((u) => {
    coluna.appendChild(criarCaixa(u));
    coluna.appendChild(criarElo());
  });

  const grade = document.getElementById('assessorias');
  assessorias.forEach((a) => {
    const celula = document.createElement('div');
    celula.className = `celula ${a.lado}`;
    celula.style.gridRow = a.linha;
    celula.style.gridColumn = a.lado === 'esquerda' ? 1 : 3;
    celula.appendChild(criarCaixa(a));
    grade.appendChild(celula);
  });

  detalhe.textContent = MENSAGEM_PADRAO;
}

montar();
