FROM node:8.4.0

COPY . /frontend
WORKDIR /frontend
RUN npm install && npm run build

FROM nginx:1.29.0

COPY --from=0 /frontend/ /usr/share/nginx/html

