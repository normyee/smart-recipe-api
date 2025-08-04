AWS CLI
usar --profile [PERFIL], --region [REGIÃO] e --endpoint-url [ENDPOINT] para acessar o recurso correto

aws dynamodb [COMANDOS]

list-tables -> lista as tabelas do banco
EX: aws dynamodb list-tables --profile localstack --endpoint-url http://localhost:4566 --region us-east-1

delete-table -> deleta uma tabela
PARAMS: --table-name
EX: aws dynamodb delete-table --table-name recipes --profile localstack --endpoint-url http://localhost:4566 --region us-east-1

scan -> listar os itens
PARAMS: --max-items

put-item -> adiciona/atualiza item
PARAMS: --item (JSON stringifada), --table-name (nome da tabela)