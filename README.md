<h1 align="center">
    <img alt="Be the Hero" src="web/src/assets/logo.svg" width="200px" />
</h1>

<h4 align="center">
  🚀 Semana Omnistack 11
</h4>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000">
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>
</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Django](https://www.djangoproject.com/)
- [Django-Rest-Framework](https://www.django-rest-framework.org/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 💻 Projeto
**Be the Hero foi feito para mostrar casos em que heróis podem ajudar com alguma doação e salvar o dia. Seja um herói!!**

## Instalação

## Backend
Necessário ter o Python instalado em sua máquina. De preferência 3.6 para cima.

#### Primeiro: renomear arquivo com variáveis de ambiente
-  **Renomear _backend/setup/env_example.py_ para _backend/setup/env.py_**

#### Segundo: no terminal, rodar
```sh
cd backend_django
python -m venv venv
. venv/Scripts/activate
pip install -r requirements.txt
python manage.py migrate
```
Repectivamente:
- Entrar na pasta dos arquivos do backend
- Criar um ambiente virtual
- Ativar o ambiente virtual
- Instalar todos os pacotes necessários para rodar a aplicação
- Executar as migrações

#### Terceiro: Obter IPV4 para o seu pc servir os dados da API para os dispostivos da sua rede
```sh
python get_IPV4.py
```
**Seu IP será exibido em tela. Guarde-o. Será necessário colocá-lo no frontend e no mobile (ROTA_API)**

#### Por fim: deixar a API rodando

```sh
python manage.py runserver ROTA_API
```
![API 0](/images/api_0.png?raw=true)


## Frontend
Necessário ter o node e o yarn instalados na máquina

#### Primeiro: adicionar endereço do backend
- Abrir *frontend/src/services/api.js* e adicionar o endereço da sua API (ROTA_API)

#### Segundo: no terminal, rodar
```sh
cd web
yarn install
yarn start
```
Repectivamente:
- Para entrar na pasta dos arquivos do frontend
- Instalar os pacotes do projeto
- Rodar

![Web 0](/images/web_0.png?raw=true)

![Web 1](/images/web_1.png?raw=true)

![Web 2](/images/web_2.png?raw=true)

## Mobile
Necessário ter o expo instalado na máquina e ter o expo instalado no celular.

#### Primeiro: adicionar endereço do backend
- Abrir *frontend/src/services/api.js* e adicionar o endereço da sua API (ROTA_API)

#### Segundo: no terminal, rodar
```sh
cd mobile
yarn install
expo start
```

Repectivamente:
- Para entrar na pasta com os arquivos do mobile
- Instalar pacotes do projeto
- Rodar

#### Terceiro: rodar expo no celular
- Abrir expo no celular
- Ler QR code e executar o app

![Mobile 0](/images/mobile_0.png?raw=true)