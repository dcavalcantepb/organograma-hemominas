// ESTRUTURA do organograma (quais unidades existem e como se ligam).
// Os dados das PESSOAS (nome, cargo, ramal, e-mail, foto) ficam em gestores.js,
// ligados a cada unidade pelo `id`.
//
// Fonte da estrutura: organograma oficial (Lei 22.257/2016, Lei 24.313/2023, Decreto 49.293).
// Escopo atual: apenas Conselho Curador, Presidência e seus órgãos de assessoramento.

// Cadeia vertical central, de cima para baixo.
const cadeia = [
  { id: 'conselho-curador', nome: 'Conselho Curador', tipo: 'principal' },
  { id: 'presidencia', nome: 'Presidência', tipo: 'principal' },
];

// Posição na grade: lado da linha central e linha (1 a 3).
const assessorias = [
  { id: 'gabinete', nome: 'Gabinete', tipo: 'assessoria', lado: 'esquerda', linha: 1 },
  { id: 'procuradoria', nome: 'Procuradoria', tipo: 'assessoria', lado: 'direita', linha: 1 },
  { id: 'controladoria', nome: 'Controladoria Seccional', tipo: 'assessoria', lado: 'direita', linha: 2 },
  { id: 'ascom', nome: 'Assessoria de Comunicação Social', tipo: 'assessoria', lado: 'esquerda', linha: 3 },
  {
    id: 'agequa',
    nome: 'Assessoria de Gestão Estratégica e Qualidade',
    tipo: 'assessoria',
    lado: 'direita',
    linha: 3,
    // Segundo nível: setores ligados à unidade (aparecem ao clicar no "+").
    setores: [
      { id: 'setor-estrategias-projetos', nome: 'Setor de Estratégias e Projetos', tipo: 'setor' },
      { id: 'setor-gestao-processos', nome: 'Setor de Gestão de Processos', tipo: 'setor' },
      { id: 'setor-gestao-qualidade', nome: 'Setor de Gestão da Qualidade', tipo: 'setor' },
    ],
  },
];
