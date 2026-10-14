# Módulo 9 — Tematização: O Visual do Instagram

## O que foi construído

- Tema customizado "drupagram" (Starterkit sobre `stable9`) com design tokens em CSS custom properties
- Cabeçalho responsivo com logo, busca, menu e botão de tema
- Feed em grade: 1 coluna no celular, 2 no tablet, 3 no desktop
- Cartão do post (`teaser`) com foto, curtir, descrição e hashtags; comentários só na página do post
- Dark mode por botão, respeitando a preferência do sistema, com a escolha salva no navegador
- Acessibilidade essencial: link para pular ao conteúdo, foco visível, contraste, textos alternativos e movimento reduzido

## Conceitos Drupal introduzidos

- Anatomia de um tema Drupal (`.info.yml`, `.libraries.yml`, templates Twig)
- Modos de exibição (`teaser` e `default`) e como as Views os usam
- Posicionamento de blocos em regiões
- CSS custom properties como design tokens

## Exercício

Navegue pelo feed, pela página de um post e por uma hashtag em três larguras (320, 768 e 1280 pixels), alterne o dark mode e confirme que a escolha continua depois de recarregar. Edite `--dg-accent` em `css/theme/tokens.css` e veja a cor mudar.

## Próximo módulo

```bash
git checkout modulo-10
```

👉 [Matricule-se no Drupagram](https://drupalizando.com.br/cursos/drupagram/)
