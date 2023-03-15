FROM node:latest as build
WORKDIR /web
ENV PATH /web/node_modules/.bin:$PATH
COPY package.json ./
RUN npm ci --silent
RUN npm install react-scripts@latest -g --silent
COPY . ./
RUN npm run build

# production environment
FROM flashspys/nginx-static
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /web/build /etc/static
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]