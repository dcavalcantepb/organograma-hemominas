export interface Unidade {
  id: string
  nome: string
  sigla?: string
  filhos?: Unidade[]
}

// Dados de exemplo (fictícios). Substituir pela estrutura oficial da Hemominas.
export const organograma: Unidade = {
  id: 'presidencia',
  nome: 'Presidência',
  filhos: [
    {
      id: 'assessoria',
      nome: 'Assessoria',
      filhos: [],
    },
    {
      id: 'dir-tecnica',
      nome: 'Diretoria Técnico-Científica',
      filhos: [
        { id: 'ger-hemoterapia', nome: 'Gerência de Hemoterapia' },
        { id: 'ger-hematologia', nome: 'Gerência de Hematologia' },
      ],
    },
    {
      id: 'dir-admin',
      nome: 'Diretoria Administrativo-Financeira',
      filhos: [
        { id: 'ger-rh', nome: 'Gerência de Pessoas' },
        { id: 'ger-fin', nome: 'Gerência Financeira' },
      ],
    },
  ],
}
