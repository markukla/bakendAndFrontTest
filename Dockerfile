FROM mcr.microsoft.com/windows/servercore:ltsc2019

# Metadata indicating an image maintainer.
LABEL maintainer="jshelton@contoso.com"

# Uses dism.exe to install the IIS role.
RUN dism.exe /online /enable-feature /all /featurename:iis-webserver /NoRestart

# Creates an HTML file and adds content to this file.
RUN echo "Hello World - Dockerfile" > c:\inetpub\wwwroot\index.html


FROM node:14 AS ui-build
WORKDIR /usr/src/app
COPY my-app/ ./my-app/
RUN  cd my-app
RUN  npm install @angular/cli
RUN  npm install
RUN  npm run build

FROM node:14 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/my-app/dist ./my-app/dist
COPY package*.json ./
COPY . .
RUN powershell npm install -g typescript
RUN powershell npm install -g ts-node
RUN powershell npm install
EXPOSE 80

CMD ["ts-node", "./src/server.ts"]







