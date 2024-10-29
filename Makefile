build:
	yarn build
start:
	pm2 start "PORT=3002  node .output/server/index.mjs" --name=toprankings_client
restart:
	pm2 restart 3
rebuild: build restart

