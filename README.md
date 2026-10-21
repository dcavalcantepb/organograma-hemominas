# Organograma Hemominas

Organograma interativo da Fundação Hemominas, em HTML, CSS e JavaScript puros (sem build).

Estado atual: Conselho Curador, Presidência e seus órgãos de assessoramento.

## Rodar
Abrir `index.html` no navegador. Não precisa de servidor nem de instalação.

## Estrutura
- `gestores.js` — dados das pessoas (nome, cargo, ramal, e-mail, foto) — o que se atualiza no dia a dia
- `data.js` — estrutura das unidades do organograma
- `app.js` — montagem da tela e interação
- `style.css` — visual (paleta do organograma oficial)

## Card do gestor
Ao clicar numa caixa, abre um card com foto, setor, nome, cargo, ramal e e-mail do gestor.

**Para atualizar uma pessoa, edite só o `gestores.js`** — um bloco por unidade, com
instruções no topo do arquivo. Campos vazios aparecem como "Não informado". Para a foto,
coloque a imagem em `fotos/` e informe o caminho (ex.: `foto: 'fotos/maria.jpg'`); sem
foto, aparece um avatar genérico.

A estrutura (quais unidades existem e como se ligam) fica em `data.js`. Cada unidade é
ligada à sua pessoa em `gestores.js` pelo mesmo `id`.

Atenção: o repositório é público, então tudo que for preenchido aqui fica público.

## Publicar (GitHub Pages)
Settings → Pages → Deploy from a branch → `main` / `/ (root)`.
