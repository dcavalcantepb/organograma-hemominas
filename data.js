// Fonte da estrutura: organograma oficial (Lei 22.257/2016, Lei 24.313/2023, Decreto 49.293).
// Escopo atual: apenas Conselho Curador, Presidência e seus órgãos de assessoramento.
//
// ATENÇÃO: nomes, cargos, ramais e e-mails abaixo são FICTÍCIOS (dados de teste).
// Os e-mails usam o domínio reservado ".exemplo", que não existe de verdade.
//
// Cada unidade tem um `gestor` com: nome, cargo, ramal, email e foto.
// - Campos vazios ('') aparecem como "Não informado" no card.
// - `foto` é o caminho de uma imagem dentro de `fotos/` (ex.: 'fotos/presidente.jpg').
//   Sem foto, o card mostra um avatar genérico.
function gestor(nome = '', cargo = '', ramal = '', email = '', foto = '') {
  return { nome, cargo, ramal, email, foto };
}

// Cadeia vertical central, de cima para baixo.
const cadeia = [
  {
    id: 'conselho-curador',
    nome: 'Conselho Curador',
    tipo: 'principal',
    gestor: gestor('Henrique Marques Teixeira', 'Presidente do Conselho Curador', '2001', 'henrique.teixeira@hemominas.exemplo', 'fotos/conselho-curador.jpg'),
  },
  {
    id: 'presidencia',
    nome: 'Presidência',
    tipo: 'principal',
    gestor: gestor('Helena Alves Pimenta', 'Presidente da Fundação', '2000', 'helena.pimenta@hemominas.exemplo', 'fotos/presidencia.jpg'),
  },
];

// Posição na grade: lado da linha central e linha (1 a 3).
const assessorias = [
  {
    id: 'gabinete',
    nome: 'Gabinete',
    tipo: 'assessoria',
    lado: 'esquerda',
    linha: 1,
    gestor: gestor('Camila Rocha Duarte', 'Chefe de Gabinete', '2010', 'camila.duarte@hemominas.exemplo', 'fotos/gabinete.jpg'),
  },
  {
    id: 'procuradoria',
    nome: 'Procuradoria',
    tipo: 'assessoria',
    lado: 'direita',
    linha: 1,
    gestor: gestor('Fernando Lacerda Moura', 'Procurador-Chefe', '2020', 'fernando.moura@hemominas.exemplo'),
  },
  {
    id: 'controladoria',
    nome: 'Controladoria Seccional',
    tipo: 'assessoria',
    lado: 'direita',
    linha: 2,
    gestor: gestor('Patrícia Nogueira Braga', 'Controladora Seccional', '2030', 'patricia.braga@hemominas.exemplo'),
  },
  {
    id: 'ascom',
    nome: 'Assessoria de Comunicação Social',
    tipo: 'assessoria',
    lado: 'esquerda',
    linha: 3,
    gestor: gestor('Marcos Vinícius Tavares', 'Assessor de Comunicação Social', '2040', 'marcos.tavares@hemominas.exemplo'),
  },
  {
    id: 'agequa',
    nome: 'Assessoria de Gestão Estratégica e Qualidade',
    tipo: 'assessoria',
    lado: 'direita',
    linha: 3,
    gestor: gestor('Juliana Castro Menezes', 'Assessora de Gestão Estratégica e Qualidade', '2050', 'juliana.menezes@hemominas.exemplo'),
  },
];
