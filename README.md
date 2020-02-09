# Desafio Bridge Full Stack v1.0.1

Código relacionado ao desafio para a vaga de desenvolvedor Full Stack.
Estruturado da seguinte forma:

- Fronted
- Backend

Todas estas estrutura estão dentro de containers, e posteriormente será realizado o _deploy_ com o uso do `docker-compose`.

Todas as imagens dos _containers_ são baseadas na versão _alpine_, buscando reduzir o espaço ocupado pela imagem do _container_ e seu consumo de recursos.

## Backend:

O núcleo é baseado no _framework_ `Django`, nele são realizadas as requisições a API do Github que serão repassadas ao frontend, o principal trecho de código encontra-se em `backend/src/fetcher/views.py`.

Além disso, faz uso da biblioteca `django-environ` para lidar com arquivos que carregam variáveis de ambiente.

O `Django` é executado dentro de um _container_ nomeado `backend`, e escuta na porta 8000 do seu _container_ e mapeado para a porta 8000 da máquina _host_.

## Frontend

Usa o framework React, e faz requisições de dados ao `backend` para renderizá-los no _client side_.

Foi utilizado o `create-react-app` para iniciar o projeto. Assim como o `backend`, também faz o uso de arquivo com variáveis de ambiente, porém com o auxílio da biblioteca `dotenv`.

Para estilização da interface de usuário foi utilizada a biblioteca `reactstrap` que implementa o bootstrap como componentes do React.

Executa dentro de um _container_ nomeado `frontend` e escuta na porta 3000 mapeada para a porta 3000 da máquina _host_.

## Instalação

Para executar este projeto localmente é necessário ter `git`, `docker` e `docker-compose` instalados e seguir os seguintes passos:

```
git clone https://github.com/b-marques/desafio-bridge.git

cd desafio-bridge

docker-compose build

docker-compose up
```
