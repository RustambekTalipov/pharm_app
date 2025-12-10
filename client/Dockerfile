# Этап сборки
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Этап запуска (Nginx для статики)
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
# Копируем конфиг nginx, чтобы SPA работал корректно (опционально, но полезно)
RUN echo 'server { listen 80; root /usr/share/nginx/html; include /etc/nginx/mime.types; location / { try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]