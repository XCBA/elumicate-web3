# Status

Need to configure dockerfile to create db "app" 
Test then that initdb works, it should
Then try running the app

# TODO

- Initialize the database inside the apps dockerfile - copy from pebble-docker - not working - checking for changes in simones repo
- Setup the launch config

# DONE


- env variables not visible in container app. Have to specify them in docker compose
- Determine the mosquitto server IP inside the docker network and setup .env file properly (should be a matter of checking the network)