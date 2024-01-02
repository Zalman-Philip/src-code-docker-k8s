FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm i 

COPY ./src ./src
COPY ./public ./public

COPY index.html ./
COPY vite.config.ts ./

ENV VITE_BASE_URL=http://localhost/erp/api

RUN npm run build && npm cache clean --force

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/src/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]