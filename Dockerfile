FROM node:latest as build
WORKDIR /web
COPY package.json ./
RUN npm i
COPY . ./
RUN npm run build

# production environment
FROM flashspys/nginx-static
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /web/dist /etc/static
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]