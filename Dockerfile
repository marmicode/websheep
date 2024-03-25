# Author: Kunush
FROM node:13.5.0-alpine3.10
# copy the local folder to the image
COPY websheep /websheep 
# run build
RUN  cd /websheep && yarn install
# change to websheep directory
WORKDIR /websheep
# expose websheep ports [3333: web service, 4200: web interface, 7777: debugging ws]
EXPOSE 4200
EXPOSE 3333
EXPOSE 7777
ENTRYPOINT ["yarn", "start"]
