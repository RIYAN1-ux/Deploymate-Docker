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

# Dockerfile for Non-Privilege Mode
Here we are creating the dockerfile in non-privilege mode , by creating group . Below are the mentioned commands for the Dockerfile :
```console 
FROM node:20.15-alpine
RUN addgroup -S riyan && adduser -S -G riyan riyan

WORKDIR /node

COPY package*.json ./

RUN npm install --unsafe-perm 

COPY . .

EXPOSE 3000

USER riyan

CMD node app.js

```


For the command `RUN addgroup -S riyan && adduser -S -G riyan riyan`

	1.	addgroup -S riyan:
		• addgroup: Command to add a new group.
		• -S: Creates a system group.
		• riyan: The name of the group being created.
	2.	adduser -S -G riyan riyan:
 		• adduser: Command to add a new user.
		• -S: Creates a system user (a user meant for running system services and with no password).
		• -G riyan: Specifies that the user should be added to the riyan group.
		• riyan: The name of the user being created.

