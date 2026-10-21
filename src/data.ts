export type Tipo = 'principal' | 'assessoria'

export interface Unidade {
  id: string
  nome: string
  tipo: Tipo
}

// Fonte: organograma oficial (Lei 22.257/2016, Lei 24.313/2023, Decreto 49.293).
// Escopo atual: apenas Conselho Curador, Presidência e seus órgãos de assessoramento.
export const cadeia: Unidade[] = [
  { id: 'conselho-curador', nome: 'Conselho Curador', tipo: 'principal' },
  { id: 'presidencia', nome: 'Presidência', tipo: 'principal' },
]

// Posição na grade: coluna esquerda/direita da linha central e a linha (1 a 3).
export interface Assessoria extends Unidade {
  lado: 'esquerda' | 'direita'
  linha: 1 | 2 | 3
}

export const assessorias: Assessoria[] = [
  { id: 'gabinete', nome: 'Gabinete', tipo: 'assessoria', lado: 'esquerda', linha: 1 },
  { id: 'procuradoria', nome: 'Procuradoria', tipo: 'assessoria', lado: 'direita', linha: 1 },
  { id: 'controladoria', nome: 'Controladoria Seccional', tipo: 'assessoria', lado: 'direita', linha: 2 },
  { id: 'ascom', nome: 'Assessoria de Comunicação Social', tipo: 'assessoria', lado: 'esquerda', linha: 3 },
  { id: 'agequa', nome: 'Assessoria de Gestão Estratégica e Qualidade', tipo: 'assessoria', lado: 'direita', linha: 3 },
]
