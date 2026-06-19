# Módulo Bônus — Próximos Passos

## O que você construiu

Parabéns! Você chegou ao fim do Drupagram e tem um site funcional com:

- Post de foto com media (campo `field_foto` via Media Library)
- Perfil de usuário com bio
- Hashtags com free-tagging
- Feed de fotos em grade 3×3 (`/feed`)
- Curtidas com drupal/flag
- Comentários nativos do Drupal
- Tema customizado (`drupagram`) com CSS de grade Instagram
- URLs amigáveis via Pathauto (`/post/[titulo]`)
- Explorar posts por hashtag (`/explorar/hashtag/[id]`)
- SEO com Metatag
- Script de deploy (`scripts/deploy.sh`)

## O que você pode construir a seguir

### Funcionalidades sociais

- **Seguidores** — Flag de `seguir` no user entity (`flag_type: entity:user`)
- **Notificações** — drupal/message + drupal/message_notify
- **Stories** — content type separado com expiração (drupal/scheduler)
- **Mensagens diretas** — drupal/private_message

### Feed personalizado

- Feed de posts apenas dos usuários que você segue (Views com relationship para flags)
- Ordenação por relevância (drupal/search_api + Solr)

### Qualidade e escala

- Search API + Solr para busca full-text de posts e hashtags
- drupal/tome para exportar o site como HTML estático
- CDN para as imagens (drupal/s3fs + AWS S3)
- Testes automatizados com drupal/test_helpers

### Próximo curso da série

> **Drupreddit** — construindo o Reddit com Drupal
> Votos, comunidades, karma, feeds cronológicos e por relevância.

```bash
# Continue aprendendo
git checkout main
```

👉 [Acessar Drupalizando](https://drupalizando.com.br)
