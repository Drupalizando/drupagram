# Módulo 0 — Boas-vindas ao Drupagram

Bem-vindo ao Drupagram! Este branch é o ponto de partida do curso — o projeto está configurado com DDEV, mas o Drupal ainda não foi instalado. Isso acontece no Módulo 1.

## O que está neste branch

- Configuração do DDEV (`.ddev/config.yaml`)
- Definição do projeto Composer (`composer.json`) com todos os módulos contrib que usaremos
- `.gitignore` padrão para projetos Drupal

## Próximo passo

Abra o Módulo 1 do curso no Hotmart e instale o Drupal:

```bash
git checkout modulo-01
```

Ou continue no branch atual e siga o Módulo 1 do zero:

```bash
ddev start
composer install
ddev drush site-install --account-name=admin --site-name="Drupagram" -y
ddev drush uli
```

## Curso no Hotmart

👉 [Acessar Drupagram no Hotmart](https://hotmart.com/product/drupagram)
