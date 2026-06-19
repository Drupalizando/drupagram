#!/bin/bash
# Drupagram — script de deploy
# Executar no servidor após fazer git pull

set -euo pipefail

echo "▶ Instalando dependências..."
composer install --no-dev --optimize-autoloader

echo "▶ Limpando caches..."
drush cr

echo "▶ Atualizando banco de dados..."
drush updb -y

echo "▶ Importando configuração..."
drush cim -y

echo "▶ Limpando caches novamente..."
drush cr

echo "✓ Deploy concluído."
