#!/bin/bash
set -e

# Verifica se o diretório de dados está vazio (primeira execução)
if [ ! -s "$PGDATA/postgresql.conf" ]; then
    echo "Configurando PostgreSQL Replica..."

    # O pg_basebackup conecta-se ao serviço 'postgres-master' na porta padrão 5432
    # e copia os dados do Mestre para o diretório de dados da Réplica.
    pg_basebackup -h postgres-master -D $PGDATA -U admindb -P -Xs stream -R

    echo "Configuração da Réplica concluída."
fi
