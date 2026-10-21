import { useState } from 'react'
import { assessorias, cadeia, type Unidade } from './data'

export default function App() {
  const [selecionada, setSelecionada] = useState<Unidade | null>(null)

  const caixa = (u: Unidade, extra?: React.CSSProperties) => (
    <button
      key={u.id}
      className={`caixa ${u.tipo}${selecionada?.id === u.id ? ' ativa' : ''}`}
      style={extra}
      onClick={() => setSelecionada(selecionada?.id === u.id ? null : u)}
    >
      {u.nome}
    </button>
  )

  return (
    <main>
      <header>
        <h1>Organograma</h1>
        <p>Estrutura Orgânica da Fundação Hemominas — Administração Central</p>
      </header>

      <section className="quadro" aria-label="Administração Central">
        <div className="coluna">
          {caixa(cadeia[0])}
          <span className="elo" />
          {caixa(cadeia[1])}
          <span className="elo" />
        </div>

        <div className="assessorias">
          <span className="linha-central" />
          {assessorias.map((a) => (
            <div
              key={a.id}
              className={`celula ${a.lado}`}
              style={{ gridRow: a.linha, gridColumn: a.lado === 'esquerda' ? 1 : 3 }}
            >
              {caixa(a)}
            </div>
          ))}
        </div>
      </section>

      <p className="detalhe" aria-live="polite">
        {selecionada ? selecionada.nome : 'Clique em uma unidade para selecioná-la.'}
      </p>
    </main>
  )
}
