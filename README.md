# Drupagram

> **Drupalizando Build Series — Curso 1 de 8**

Construa uma rede social de fotos como o Instagram com Drupal — feed de fotos, perfis de usuário, hashtags, curtidas e comentários. Do zero ao deploy, totalmente em português.

🎓 **[Acesse o curso completo no Hotmart →](https://hotmart.com/product/drupagram)**

---

## O que você vai construir

Um clone funcional do Instagram com:

- ✅ Feed de fotos com grid 3×3
- ✅ Perfis de usuário com avatar e bio
- ✅ Hashtags navegáveis
- ✅ Sistema de curtidas
- ✅ Comentários por post
- ✅ Tema personalizado com Twig
- ✅ Site no ar com SSL

---

## Pré-requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado
- [DDEV](https://ddev.readthedocs.io/en/stable/#installation) instalado
- Noções básicas de PHP, HTML/CSS e terminal

---

## Como usar este repositório

Cada branch representa o estado do projeto **após** o módulo correspondente.
Para começar um módulo, faça checkout do branch do módulo **anterior**.

### Começar do zero (Módulo 1)

```bash
git clone https://github.com/Drupalizando/drupagram.git
cd drupagram
git checkout modulo-00
ddev start
composer install
ddev drush site-install --account-name=admin --site-name="Drupagram" -y
ddev drush uli
```

### Entrar em qualquer módulo

```bash
git checkout modulo-05   # substitua pelo módulo anterior ao que vai assistir
ddev start
ddev drush cim -y
ddev drush cr
ddev drush uli
```

---

## Mapa de branches

| Branch | Estado do projeto | Para começar o módulo |
|---|---|---|
| `modulo-00` | DDEV + Composer scaffold | Módulo 1 |
| `modulo-01` | Drupal instalado e configurado | Módulo 2 |
| `modulo-02` | Content type Photo Post | Módulo 3 |
| `modulo-03` | Image styles + Media Library | Módulo 4 |
| `modulo-04` | Perfis de usuário estendidos | Módulo 5 |
| `modulo-05` | Hashtags + Pathauto | Módulo 6 |
| `modulo-06` | Views: feed, perfil, hashtag | Módulo 7 |
| `modulo-07` | Likes com Flag | Módulo 8 |
| `modulo-08` | Comentários | Módulo 9 |
| `modulo-09` | Tema Drupagram | Módulo 10 |
| `modulo-10` | Página Explorar + busca | Módulo 11 |
| `modulo-11` | Cache + config management | Módulo 12 |
| `modulo-12` | Site no ar (deploy) | Módulo Bônus |
| `modulo-bonus` | App completo | — |
| `main` | App completo (igual ao bonus) | — |

### Ver o que cada módulo ensina

```bash
git diff modulo-05..modulo-06   # mostra exatamente o que o Módulo 6 adiciona
git log modulo-06 --oneline     # histórico até o Módulo 6
```

---

## Sobre o curso

Criado por **[Reva Gomes](https://revagomes.com.br)** — Senior Drupal Engineer, 10+ anos de experiência, Bruxelas. Fundador da [Revax](https://revax.net).

Precisa de uma equipe Drupal para seu projeto? **[Entre em contato com a Revax →](https://revax.net)**

---

## Licença

MIT © Drupalizando / Revax
