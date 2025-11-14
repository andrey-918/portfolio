# TODO: Move hardcoded passwords from docker-compose.yml to .env

- [x] Update .env file with database and app environment variables (POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DSN, PORT)
- [x] Update docker-compose.yml to remove hardcoded environment variables from db and backend services
- [x] Add env_file: .env to db and backend services in docker-compose.yml
- [ ] Test the setup by running docker-compose up to ensure services start and backend connects to DB
- [ ] Verify .env is not committed to git (check git status)
