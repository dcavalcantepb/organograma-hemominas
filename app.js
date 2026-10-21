const card = document.getElementById('card');
const NAO_INFORMADO = 'Não informado';
let selecionadaId = null;

function criarCaixa(unidade) {
  const botao = document.createElement('button');
  botao.className = `caixa ${unidade.tipo}`;
  botao.dataset.id = unidade.id;
  botao.textContent = unidade.nome;
  botao.addEventListener('click', () => abrirCard(unidade));
  return botao;
}

function criarElo() {
  const elo = document.createElement('span');
  elo.className = 'elo';
  return elo;
}

function marcarSelecionada(id) {
  selecionadaId = id;
  document.querySelectorAll('.caixa').forEach((c) => {
    c.classList.toggle('ativa', c.dataset.id === id);
  });
}

function preencherTexto(id, valor) {
  const el = document.getElementById(id);
  el.textContent = valor || NAO_INFORMADO;
  el.classList.toggle('vazio', !valor);
}

function preencherFoto(gestor) {
  const area = document.getElementById('card-foto');
  area.replaceChildren();
  if (gestor.foto) {
    const img = document.createElement('img');
    img.src = gestor.foto;
    img.alt = gestor.nome ? `Foto de ${gestor.nome}` : 'Foto do gestor';
    // Se a imagem não carregar, volta para o avatar genérico.
    img.addEventListener('error', () => preencherFoto({ ...gestor, foto: '' }));
    area.appendChild(img);
  } else {
    area.innerHTML =
      '<svg viewBox="0 0 64 64" role="img" aria-label="Sem foto">' +
      '<circle cx="32" cy="24" r="11"/>' +
      '<path d="M10 58c0-12 10-20 22-20s22 8 22 20z"/></svg>';
  }
}

function preencherEmail(email) {
  const el = document.getElementById('card-email');
  el.replaceChildren();
  el.classList.toggle('vazio', !email);
  if (email) {
    const link = document.createElement('a');
    link.href = `mailto:${email}`;
    link.textContent = email;
    el.appendChild(link);
  } else {
    el.textContent = NAO_INFORMADO;
  }
}

function abrirCard(unidade) {
  const gestor = unidade.gestor;
  marcarSelecionada(unidade.id);
  preencherFoto(gestor);
  document.getElementById('card-setor').textContent = unidade.nome;
  preencherTexto('card-nome', gestor.nome);
  preencherTexto('card-cargo', gestor.cargo);
  preencherTexto('card-ramal', gestor.ramal);
  preencherEmail(gestor.email);
  card.showModal();
}

// Fecha ao clicar fora do card (no fundo escurecido).
card.addEventListener('click', (e) => {
  if (e.target === card) card.close();
});
document.getElementById('card-fechar').addEventListener('click', () => card.close());
// Dispara com X, Esc ou clique fora.
card.addEventListener('close', () => marcarSelecionada(null));

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
    if (a.setores && a.setores.length) {
      celula.appendChild(criarCaixaExpansivel(a, grade));
    } else {
      celula.appendChild(criarCaixa(a));
    }
    grade.appendChild(celula);
  });
}

// Caixa com botão "+" no canto inferior direito que desdobra os setores.
// O "+" é irmão da caixa (e não filho) porque um <button> não pode conter outro.
function criarCaixaExpansivel(unidade, grade) {
  const envoltorio = document.createElement('div');
  envoltorio.className = 'caixa-expansivel';

  const caixa = criarCaixa(unidade);
  caixa.classList.add('com-setores');

  const painelId = `setores-${unidade.id}`;
  const botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'expandir';
  botao.setAttribute('aria-controls', painelId);
  botao.setAttribute('aria-expanded', 'false');
  botao.setAttribute('aria-label', `Mostrar setores de ${unidade.nome}`);

  const painel = criarPainelSetores(unidade, painelId);
  // Linha seguinte à última da grade; a linha central não chega até ela.
  painel.style.gridRow = 4;
  painel.style.gridColumn = 3;
  grade.appendChild(painel);

  botao.addEventListener('click', () => {
    const aberto = painel.hidden;
    painel.hidden = !aberto;
    botao.setAttribute('aria-expanded', String(aberto));
    botao.setAttribute('aria-label', `${aberto ? 'Ocultar' : 'Mostrar'} setores de ${unidade.nome}`);
  });

  envoltorio.append(caixa, botao);
  return envoltorio;
}

function criarPainelSetores(unidade, painelId) {
  const painel = document.createElement('div');
  painel.className = 'desdobramento';
  painel.id = painelId;
  painel.hidden = true;

  const lista = document.createElement('ul');
  lista.setAttribute('aria-label', `Setores de ${unidade.nome}`);
  unidade.setores.forEach((setor) => {
    const item = document.createElement('li');
    item.appendChild(criarCaixa(setor));
    lista.appendChild(item);
  });
  painel.appendChild(lista);
  return painel;
}

montar();
