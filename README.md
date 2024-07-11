# Deploymate-Docker
Hosting my project on Docker.

# Dockerfile 
```Console :
FROM node:20.15-alpine
RUN mkdir node
COPY . ./node
WORKDIR /node
RUN npm install
EXPOSE 3000

CMD node app.js
```

## Prereq To run the webserver :
1. Clone the Repository : `git clone <repo_link>`
2. Run the command : `npm i`
3. To start the app : `node app.js`
