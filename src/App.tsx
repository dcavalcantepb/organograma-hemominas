import { useState } from 'react'
import { organograma, type Unidade } from './data'

function No({ unidade }: { unidade: Unidade }) {
  const [aberto, setAberto] = useState(true)
  const filhos = unidade.filhos ?? []

  return (
    <li>
      <button
        className="no"
        onClick={() => filhos.length && setAberto(!aberto)}
        aria-expanded={filhos.length ? aberto : undefined}
      >
        <strong>{unidade.nome}</strong>
        {unidade.sigla && <span className="sigla">{unidade.sigla}</span>}
        {filhos.length > 0 && <span className="toggle">{aberto ? '−' : '+'}</span>}
      </button>
      {aberto && filhos.length > 0 && (
        <ul>
          {filhos.map((f) => (
            <No key={f.id} unidade={f} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default function App() {
  return (
    <main>
      <h1>Organograma — Fundação Hemominas</h1>
      <p className="aviso">Dados de exemplo (fictícios) — substituir pela estrutura oficial.</p>
      <div className="arvore">
        <ul>
          <No unidade={organograma} />
        </ul>
      </div>
    </main>
  )
}
