# Desafio Bridge Full Stack

Code related to the trainee program challenge. Structured as:
Código relacionado ao desafio para a vaga de desenvolvedor Full Stack.
Estruturado da seguinte forma:

- Fronted
- Backend

Todas estas estrutura estão dentro de containers, e posteriormente será realizado o _deploy_ em uma máquina na Amazon EC2 com `docker-compose`.

Todas as imagens dos _containers_ são baseadas na versão _alpine_, buscando reduzir o espaço ocupado pela imagem do _container_ e seu consumo de recursos.

## Backend:

O núcleo é baseado no _framework_ `Django`.

O `Django` é executado dentro de um _container_ nomeado `backend`, e escuta na porta 8000 do seu _container_ e mapeado para a porta 8000 da máquina _host_ (Amazon EC2 machine).

## Frontend

Usa o framework React, e faz requisições de dados ao `backend` para renderizá-los no _client side_.

Executa dentro de um _container_ nomeado `frontend` e escuta na porta 3000 mapeada para a porta 3000 da máquina _host_.

## Install

Para executar este projeto é necessário ter `git`, `docker` e `docker-compose` instalados e seguir os seguintes passos:

### IMPORTANTE: Para rodar localmente é necessário configurar o link de requisição do `frontend` para `127.0.0.1`.

```
git clone https://github.com/b-marques/desafio-bridge.git

cd desafio-bridge

docker-compose build

docker-compose up
```
