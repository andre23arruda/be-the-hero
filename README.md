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
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação">Instalação</a>
</p>


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Django](https://www.djangoproject.com/)
- [Django-Rest-Framework](https://www.django-rest-framework.org/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 💻 Projeto
**Be the Hero foi feito para mostrar casos em que heróis podem ajudar com alguma doação e salvar o dia. Seja um herói!!**

## Instalação
### Pré requisitos
Ter instalado:
- [Python](https://www.python.org/downloads/)
- [Node](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

### Backend
Necessário ter o Python instalado em sua máquina. De preferência 3.6 para cima.

#### Primeiro: renomear arquivo com variáveis de ambiente
-  **Renomear _backend/setup/env_example.py_ para _backend/setup/env.py_**

#### Segundo: no terminal, rodar
```sh
# Entrar na pasta dos arquivos do backend
cd backend

# Criar um ambiente virtual
python -m venv venv

# Ativar o ambiente virtual
. venv/Scripts/activate
# ou source ./venv/Scripts/activate

# Instalar os pacotes necessários
pip install -r requirements.txt

# Executar as migrações
python manage.py migrate

# Rodar backend
python runserver.py
```
**O endereço será exibido em tela. Guarde-o. Será necessário colocá-lo no frontend como ROTA_API**

#### Por fim: deixar a API rodando

```sh
# Já executará backend com seu endreço IP na rede
python manage.py runserver_ip
```

![API 0](/images/api_0.png?raw=true)


### Frontend
#### Nno terminal, rodar
```sh
# Entrar na pasta dos arquivos do frontend
cd web

# Instalar os pacotes do projeto
yarn install

# Rodar
yarn start
```

![Web 0](/images/web_0.png?raw=true)

![Web 1](/images/web_1.png?raw=true)

![Web 2](/images/web_2.png?raw=true)

### Mobile
#### No terminal, rodar
```sh
# Entrar na pasta dos arquivos do frontend
cd mobile

# Instalar os pacotes do projeto
yarn install

# Rodar
expo start
```

#### Terceiro: rodar expo no celular
- Abrir expo no celular
- Ler QR code e executar o app

![Mobile 0](/images/mobile_0.png?raw=true)
