# Websheep

[Open in Codesandbox](https://codesandbox.io/s/github/wishtack/websheep)

# Local setup

Install [Node](https://nodejs.org/en/download/) & [Yarn](https://classic.yarnpkg.com/en/docs/install/)

```
yarn install
yarn start
```
# Running websheeb using docker

1. Download the repository as a zip file
2. Unzip to a folder and rename it to websheep
3. Copy the Dockerfile outside websheep so your directory structure will look like
```
$ ls -l      
total 8
-rw-r--r-- 1 kali kali  177 Oct 19 09:55 Dockerfile
drwxr-xr-x 8 kali kali 4096 Oct 19 09:48 websheep
```
4. Building a docker image
```
sudo docker build -t mysheep .
```
5. Upon successful image build run the container
```
sudo docker run --rm -d --name sheep_container -p 4200:4200 -p 3333:3333 mysheep 
```
6. Open your browser and navigate to localhost:4200 for the web interface or localhost:3333 for the api testing interface.
   
