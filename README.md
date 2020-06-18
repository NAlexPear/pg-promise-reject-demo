## How To Use

1. make sure that you have `docker-compose` installed
2. initialize the database for the first time and run in the background with `docker-compose up -d postgres`
3. run `docker-compose up app`
4. notice that the first query succeeds, the second fails, and the error from the second failure is uncaught
