### Start project
`docker compose up --build`

### Initialize database
`docker exec -it oracle-db bash`

`sqlplus system/oracle@XEPDB1 @/docker-entrypoint-initdb.d/init.sql`
