# Kedai Inyiak RESTful API

kedai inyiak adalah mini project yang saya kembangkan untuk membantu client dalam melakukan input data barang, yang semula dari manual dari buku atau dari excel ke automatic. dan juga disini juga saya mengembangkan sistem login JWT Authentication

## Tech Stack

### Frontend

**Coming Soon**

### Backend

Tech stack yang digunakan dalam repo atau development ini adalah

- ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
- ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

## Installation For Test

**Pastikan sudah menginstall node js dan postgreSQL**

1. Clone project ini

```bash
git clone https://github.com/Moae423/frosti-backend.git
```

3. install semua paket

```bash
npm install
```

4. pastikan anda membuat file .ENV lalu copy line code yang ada dibawah ini

```bash
PORT = {`PORT YOU GONNA USE`}
DATABASE_URL="postgresql://USERNAME:PASSWORD@HOSTNAME/DB_NAME?schema=public"
JWT_SECRET="YOUR_SECRET_DATA"
```

5. generate ORM Prisma nya

```bash
npx prisma generate
```

6. Migrate schema prismanya

```bash
npx prisma migrate dev --name init
```

7. kalau sudah coba test RESTFull API nya di API Client bisa pake [bruno Client](https://www.usebruno.com/), [postman](https://www.postman.com/) atau [insomnia](https://insomnia.rest/) (saya pake insomnia)
   ![Preview](./assets/image/preview.png)
