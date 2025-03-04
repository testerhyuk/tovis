# 1. Node.js를 이용해 React 앱 빌드
FROM node:18 AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. Nginx를 사용하여 정적 파일 제공
FROM nginx:alpine

# Nginx 설정 파일 복사
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# React 빌드된 파일을 Nginx의 기본 루트 경로로 이동
COPY --from=build /app/build /usr/share/nginx/html

# 80 포트 오픈
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
