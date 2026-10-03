# Módulo 12 — Deploy: Colocando no Ar

## O que foi construído

- Servidor Ubuntu com Apache, PHP 8.2 e MariaDB provisionado
- Código do Drupagram implantado via git, configuração importada via `drush cim`
- HTTPS via Let's Encrypt, site acessível publicamente em um domínio real

## Conceitos Drupal introduzidos

- Stack LAMP em produção (PHP-FPM em vez de `mod_php`)
- Deploy via git clone + `drush deploy` (updb + cim + cr)

## Exercício

Acesse o site publicamente via HTTPS, navegue pelo feed, perfis e páginas de hashtag em produção, e confirme que o certificado SSL é válido.

## Próximo módulo

```bash
git checkout modulo-bonus
```

👉 [Matricule-se no Drupagram](https://drupalizando.com.br/cursos/drupagram/)
