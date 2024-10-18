build:
	docker build -t topranking_front .
rm: 
	docker rm -f topranking_front
run:
	docker run -d -it -p 3002:80 --name topranking_front topranking_front
rebuild: rm run

