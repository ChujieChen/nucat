# Dockerfile for React client
# Build react client
FROM node:12

# Working directory be app
WORKDIR /usr/src/app
COPY package*.json ./

###  Installing dependencies
RUN npm install --silent

# copy local files to app folder
COPY . .

# Front end on 8000
EXPOSE 8000

CMD ["npm","start"]