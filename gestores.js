/* ==========================================================================
   GESTORES — é AQUI que se atualizam os dados das pessoas.
   Para trocar um gestor, edite apenas o bloco da unidade correspondente.

   Como editar:
   - Troque somente o texto entre aspas. Não apague as aspas, as vírgulas
     nem as chaves { }.
   - Se um dado não existir, deixe as aspas vazias ('') — o card mostra
     "Não informado".
   - foto: caminho da imagem dentro da pasta "fotos" (ex.: 'fotos/maria.jpg').
     Deixe '' para usar o avatar genérico.
   - O nome à esquerda de cada bloco (ex.: 'presidencia') identifica a
     unidade. NÃO altere esse identificador.

   ATENÇÃO: todos os dados abaixo são FICTÍCIOS (teste). Os e-mails usam o
   domínio ".exemplo", que não existe de verdade.
   ========================================================================== */

const gestores = {
  // ---------- Conselho Curador e Presidência ----------

  'conselho-curador': {
    nome: 'Henrique Marques Teixeira',
    cargo: 'Presidente do Conselho Curador',
    ramal: '2001',
    email: 'henrique.teixeira@hemominas.exemplo',
    foto: 'fotos/conselho-curador.jpg',
  },

  'presidencia': {
    nome: 'Helena Alves Pimenta',
    cargo: 'Presidente da Fundação',
    ramal: '2000',
    email: 'helena.pimenta@hemominas.exemplo',
    foto: 'fotos/presidencia.jpg',
  },

  // ---------- Assessoramento da Presidência ----------

  'gabinete': {
    nome: 'Camila Rocha Duarte',
    cargo: 'Chefe de Gabinete',
    ramal: '2010',
    email: 'camila.duarte@hemominas.exemplo',
    foto: 'fotos/gabinete.jpg',
  },

  'procuradoria': {
    nome: 'Fernando Lacerda Moura',
    cargo: 'Procurador-Chefe',
    ramal: '2020',
    email: 'fernando.moura@hemominas.exemplo',
    foto: '',
  },

  'controladoria': {
    nome: 'Patrícia Nogueira Braga',
    cargo: 'Controladora Seccional',
    ramal: '2030',
    email: 'patricia.braga@hemominas.exemplo',
    foto: '',
  },

  'ascom': {
    nome: 'Marcos Vinícius Tavares',
    cargo: 'Assessor de Comunicação Social',
    ramal: '2040',
    email: 'marcos.tavares@hemominas.exemplo',
    foto: '',
  },

  'agequa': {
    nome: 'Juliana Castro Menezes',
    cargo: 'Assessora de Gestão Estratégica e Qualidade',
    ramal: '2050',
    email: 'juliana.menezes@hemominas.exemplo',
    foto: '',
  },

  // ---------- Setores da Assessoria de Gestão Estratégica e Qualidade ----------

  'setor-estrategias-projetos': {
    nome: 'Rodrigo Azevedo Lima',
    cargo: 'Chefe do Setor de Estratégias e Projetos',
    ramal: '2051',
    email: 'rodrigo.lima@hemominas.exemplo',
    foto: '',
  },

  'setor-gestao-processos': {
    nome: 'Fernanda Ribeiro Santos',
    cargo: 'Chefe do Setor de Gestão de Processos',
    ramal: '2052',
    email: 'fernanda.santos@hemominas.exemplo',
    foto: '',
  },

  'setor-gestao-qualidade': {
    nome: 'Tiago Carvalho Neves',
    cargo: 'Chefe do Setor de Gestão da Qualidade',
    ramal: '2053',
    email: 'tiago.neves@hemominas.exemplo',
    foto: '',
  },
};
