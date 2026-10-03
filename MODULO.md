# Módulo 11 — Performance e Configuração

## O que foi construído

- Cache e agregação de CSS/JS ajustados, BigPipe habilitado
- Configuração completa do site exportada para `config/sync/` (YAML) e versionada no git

## Conceitos Drupal introduzidos

- Camadas de cache do Drupal (Page, Dynamic Page, Render, Twig)
- Config Management System (`drush cex` / `drush cim`)

## Exercício

Mude o título da View "Feed Principal" no admin, rode `drush cex` e confirme que o YAML da View mudou (`git diff config/sync/`), e faça o commit dessa mudança de configuração.

## Próximo módulo

```bash
git checkout modulo-12
```

👉 [Matricule-se no Drupagram](https://drupalizando.com.br/cursos/drupagram/)
