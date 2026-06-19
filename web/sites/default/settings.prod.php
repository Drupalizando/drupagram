<?php
/**
 * Configurações de produção do Drupagram.
 * Copiar para settings.local.php no servidor e preencher os valores.
 */

// Base de dados
$databases['default']['default'] = [
  'database' => getenv('DB_NAME') ?: 'drupagram',
  'username' => getenv('DB_USER') ?: 'drupal',
  'password' => getenv('DB_PASS') ?: '',
  'host'     => getenv('DB_HOST') ?: 'localhost',
  'port'     => getenv('DB_PORT') ?: '3306',
  'driver'   => 'mysql',
  'prefix'   => '',
  'namespace' => 'Drupal\\mysql\\Driver\\Database\\mysql',
  'autoload'  => 'core/modules/mysql/src/Driver/Database/mysql/',
];

// Salt de hash (gerar com: drush php-eval "echo Drupal\Component\Utility\Crypt::randomBytesBase64(55)")
$settings['hash_salt'] = getenv('DRUPAL_HASH_SALT') ?: 'CHANGE_ME';

// Caches agressivos em produção
$settings['cache']['bins']['render'] = 'cache.backend.null';
$config['system.performance']['css']['preprocess'] = TRUE;
$config['system.performance']['js']['preprocess'] = TRUE;

// Diretório de sincronização de config
$settings['config_sync_directory'] = '../config/sync';

// Modo de produção
$config['system.logging']['error_level'] = 'hide';
