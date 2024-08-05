# NestJS Domain Driven Design

## Prerequisites

Ensure you have docker and docker compose:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)

## Setup and Installation

1. **Start Docker Containers**
```bash
docker compose up -d
npm run db:migrate
```
This will start the database and phpmyadmin, and migrate the database with our tables.