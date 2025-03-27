build:
	yarn build
start:
	pm2 start "PORT=3002 node .output/server/index.mjs"
restart:
	pm2 restart 7
rebuild: build restart

