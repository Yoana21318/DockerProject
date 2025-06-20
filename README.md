# DockerProject

Този проект е пример за приложение с MongoDB и Node.js backend, което работи в Docker контейнери.

## Описание

- MongoDB база данни, стартирана в Docker контейнер.
- Node.js backend, който се свързва към MongoDB и предоставя REST API за данни за коли.
- Docker Compose файл, който стартира и двете услуги (mongo и backend) с необходимите конфигурации.

## Изисквания

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Стартиране на проекта

1. Клонирай репото:

```bash
git clone <url-на-репото>
cd DockerProject
Стартирай Docker Compose:

bash
Copy
Edit
docker compose up --build
Това ще изгради контейнерите и ще стартира MongoDB и backend сървъра.

API
GET /cars - Връща всички коли от базата.

GET /cars/:brand - Връща коли от определена марка.

Описание на файловете
docker-compose.yaml - конфигурация за Docker услугите.

/backend - Node.js сървър и скриптове.

insert.js - скрипт за добавяне на начални данни в MongoDB.

Настройки
Променливата на средата MONGO_URI се използва за връзка към MongoDB и е конфигурирана в docker-compose.yaml.
