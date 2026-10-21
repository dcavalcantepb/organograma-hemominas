# Organograma Hemominas

Organograma interativo da Fundação Hemominas, em HTML, CSS e JavaScript puros (sem build).

Estado atual: Conselho Curador, Presidência e seus órgãos de assessoramento.

## Rodar
Abrir `index.html` no navegador. Não precisa de servidor nem de instalação.

## Estrutura
- `data.js` — unidades do organograma
- `app.js` — montagem da tela e interação
- `style.css` — visual (paleta do organograma oficial)

## Card do gestor
Ao clicar numa caixa, abre um card com foto, setor, nome, ramal e e-mail do gestor.
Os dados ficam em `data.js`, no campo `gestor` de cada unidade. Campos vazios aparecem
como "Não informado". Para a foto, coloque a imagem em `fotos/` e informe o caminho
(ex.: `foto: 'fotos/presidente.jpg'`); sem foto, aparece um avatar genérico.

Atenção: o repositório é público, então tudo que for preenchido aqui fica público.

## Publicar (GitHub Pages)
Settings → Pages → Deploy from a branch → `main` / `/ (root)`.
