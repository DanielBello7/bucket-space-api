# BUCKET-SERVER

#### start command

ENV_FILE=envs/.env.dev LOG_PATH=logs/ npm run start

when attempting to run the docker container
run as follows

- npm run docker:build
- npm run docker:install
- npm run docker:dev/npm run docker:pro

why?

this is because of the way the volumes are mounted,
when you use volumes like this
`volumes:
    - .:/app
    - /app/node_modules`
you;

- first, re-write the whole app folder inside the container
- second, mount an empty node_modules container so there's actually no
  package installed inside the /app/node_modules, your container just
  doesn't watch your host machine's node_modules anymore
